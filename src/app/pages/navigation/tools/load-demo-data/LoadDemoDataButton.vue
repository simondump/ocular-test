<template>
  <ContextMenuButton :text="t('navigation.tools.demo.loadDemoData')" :icon="RiMagicLine" @click="loadDemoData" />
</template>

<script lang="ts" setup>
import { RiMagicLine } from '@remixicon/vue';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ContextMenuButton from '@components/base/context-menu/ContextMenuButton.vue';
import { useDataStore } from '@store/state';
import { DataStateV3 } from '@store/state/types';

const { deserialize } = useDataStore();
const { t } = useI18n();

const loading = ref(false);

const loadDemoData = async () => {
  if (loading.value) return;
  loading.value = true;

  const { default: data } = await import('./DemoData.json');
  await deserialize(data as DataStateV3);

  loading.value = false;
};

onMounted(() => {
  if (location.hash === '#demo') {
    loadDemoData();
  }
});
</script>
