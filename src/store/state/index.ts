import { useStateHistory } from '@composables';
import { AppStorage } from '@storage/types';
import { readFile, remove, uuid } from '@utils';
import { DeepReadonly, ref, watch } from 'vue';
import { inject, reactive, readonly } from 'vue';
import { generateTemplate } from './template';
import { Budget, BudgetGroup, DataStateV1, DataState, BudgetYear, DataStates, AvailableCurrency } from './types';
import { generateBudgetYear } from '@store/state/utils';
import { migrateApplicationState } from '@store/state/migrateApplicationState';
import { AvailableLocale, i18n } from '@i18n/index';

export const DATA_STORE_KEY = Symbol('DataStore');

type Group = 'expenses' | 'income';

interface Store {
  state: DeepReadonly<StoreView>;

  serialize(): string;
  deserialize(file: File): Promise<void>;

  changeYear(year: number): void;
  changeLocale(locale: AvailableLocale): void;
  changeCurrency(currency: AvailableCurrency): void;

  setBudgetGroups(target: Group, groups: BudgetGroup[]): void;
  addBudgetGroup(target: Group): void;
  addBudget(group: string): void;

  removeBudgetGroup(id: string): void;
  removeBudget(id: string): void;

  setBudgetGroupName(id: string, name: string): void;
  setBudgetName(id: string, name: string): void;
  setBudget(id: string, month: number, amount: number): void;
}

type StoreView = Omit<BudgetYear, 'year'> & {
  activeYear: number;
  currency: AvailableCurrency;
  locale: AvailableLocale;
  years: BudgetYear[];
};

export const createDataStore = (storage?: AppStorage): Store => {
  const activeYear = ref(new Date().getFullYear());
  const state = reactive<DataState>(generateTemplate());

  const history = useStateHistory(
    () => state,
    (v) => Object.assign(state, v)
  );

  window.addEventListener('keypress', (evt: KeyboardEvent) => {
    if (evt.ctrlKey || evt.metaKey) {
      if (evt.code === 'KeyZ') {
        history.undo();
      } else if (evt.code === 'KeyY') {
        history.redo();
      }
    }
  });

  const getCurrentYear = () => state.years.find((v) => v.year === activeYear.value) as BudgetYear;
  const groups = () => {
    const currentYear = getCurrentYear();
    return [...currentYear.expenses, ...currentYear.income];
  };

  watch(
    () => state.currency,
    (currency) => {
      for (const locale of i18n.global.availableLocales) {
        const formats = i18n.global.getNumberFormat(locale);
        i18n.global.setNumberFormat(locale, {
          ...formats,
          currency: { ...formats.currency, currency }
        });
      }
    }
  );

  watch(
    () => state.locale,
    (locale) => (i18n.global.locale.value = locale)
  );

  storage?.sync<DataState, DataState | DataStateV1>({
    name: 'data',
    state: () => state,
    push: (data) => {
      const currentYear = new Date().getFullYear();

      Object.assign(state, migrateApplicationState(data));

      activeYear.value = state.years.some((v) => v.year === currentYear)
        ? currentYear
        : state.years.at(-1)?.year ?? currentYear;
    }
  });

  return {
    state: readonly<StoreView>({
      get activeYear() {
        return activeYear.value;
      },
      get years() {
        return state.years;
      },
      get currency() {
        return state.currency;
      },
      get locale() {
        return state.locale;
      },
      get expenses() {
        return getCurrentYear().expenses;
      },
      get income() {
        return getCurrentYear().income;
      }
    }),

    serialize(): string {
      return JSON.stringify(state);
    },

    deserialize(file: File): Promise<void> {
      return readFile(file)
        .then(JSON.parse)
        .then((content: DataStates) => {
          Object.assign(state, migrateApplicationState(content));
        });
    },

    changeYear(year: number) {
      let data = state.years.find((v) => v.year === year);

      if (!data) {
        data = generateBudgetYear(year);
        state.years.push(data);
        state.years.sort((a, b) => a.year - b.year);
      }

      activeYear.value = year;
    },

    changeLocale(locale: AvailableLocale) {
      state.locale = locale;
    },

    changeCurrency(currency: AvailableCurrency) {
      state.currency = currency;
    },

    setBudgetGroups(target: Group, groups: BudgetGroup[]): void {
      getCurrentYear()[target] = groups;
    },

    setBudgetGroupName(id: string, name: string) {
      const group = groups().find((v) => v.id === id);
      group && (group.name = name);
    },

    setBudgetName(id: string, name: string) {
      const group = groups()
        .flatMap((v) => v.budgets)
        .find((v) => v.id === id);
      group && (group.name = name);
    },

    setBudget(id: string, month: number, amount: number) {
      const group = groups()
        .flatMap((v) => v.budgets)
        .find((v) => v.id === id);
      group && (group.values[month] = amount);
    },

    removeBudget(id: string) {
      groups().forEach(({ budgets }) => remove<Budget>(budgets, (v) => v.id === id));
    },

    removeBudgetGroup(id: string) {
      remove<BudgetGroup>(getCurrentYear().expenses, (v) => v.id === id);
      remove<BudgetGroup>(getCurrentYear().income, (v) => v.id === id);
    },

    addBudget(id: string) {
      groups()
        .find((v) => v.id === id)
        ?.budgets.push({
          id: uuid(),
          name: 'Category',
          values: new Array(12).fill(0)
        });
    },

    addBudgetGroup(target: Group) {
      getCurrentYear()[target].push({
        id: uuid(),
        name: 'New Group',
        budgets: []
      });
    }
  };
};

export const useDataStore = (): Store => {
  return inject<Store>(DATA_STORE_KEY) as Store;
};