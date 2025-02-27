<template>
  <Table ref="table" class="base-table" v-bind="{ ...tableProps, ...$attrs }">
    <template v-for="(_, scopeSlotName) in $slots" #[scopeSlotName]="scope">
      <slot :name="scopeSlotName" v-bind="scope" />
    </template>
  </Table>
  <BaseTablePagination
    :pagination="pagination"
    :paginationProps="paginationProps"
  />
</template>

<script setup lang="ts">
import { Table } from '@arco-design/web-vue'
import { computed, ref } from 'vue'
import AttrAdapter from './AttrAdapter'
import BaseTablePagination from '../BaseTablePagination/index.vue'

interface PropsType {
  columns: any[]
  selection?: 'checkbox' | 'radio'
  pagination?: any
  paginationProps?: any
}

const props = defineProps<PropsType>()

const table = ref()

const tableProps = computed(() =>
  AttrAdapter.tableProps(props.columns, props.selection)
)

defineExpose({ table })
</script>

<style lang="scss">
.base-table {
  position: relative;
  flex: 1;
  overflow: auto;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: var(--color-fill-1);
  border: 1px solid var(--color-neutral-3);
  border-bottom: 1px solid var(--color-neutral-3);
  .arco-table-th,
  .arco-table-td:not(.arco-table-tr-expand) {
    &:last-child {
      border-right: none;
    }
  }
  .arco-table-container {
    // border-top: none;
    border: none;
  }
  tr:last-child {
    .arco-table-td {
      // border-bottom: none;
    }
  }
  .arco-spin {
    height: unset;
  }
  .arco-table-content-scroll-x {
    overflow-x: unset;
    overflow-y: unset;
  }
  thead {
    tr {
      position: sticky;
      top: 0;
      z-index: 99;
    }

    user-select: none;
  }
  .arco-table-td-content:empty::before {
    display: block;
    color: var(--color-fill-4);
    content: '--';
  }
}
</style>
