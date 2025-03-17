<template>
  <div class="header-notify" @click="visible = true">
    <Badge
      dot
      class="notify-badge"
      :count="10"
      :dotStyle="{ width: '8px', height: '8px', top: '4px', right: '4px' }"
    >
      <IconNotification />
    </Badge>
  </div>
  <Modal
    v-model:visible="visible"
    title="系统未读消息"
    unmount-on-close
    :loading="true"
  >
    <div class="notify-container">
      <div v-if="isEmptyMsg" class="notify-container-empty">
        <Empty>暂无未读消息</Empty>
      </div>
      <template v-else>
        <div
          v-for="(item, index) in dataSource"
          :key="index"
          class="notify-item"
        >
          <div class="notify-item-icon">
            <IconNotification />
          </div>
          <div class="notify-item-data">
            <div class="notify-item-text">{{ item.msg.title }}</div>
            <div class="notify-item-time">
              {{ dateFormater(item.createdTime) }}
            </div>
          </div>
        </div>
      </template>
    </div>
    <template #footer>
      <div class="notify-container-footer">
        <Pagination
          v-model:current="pagination.current"
          :total="pagination.total"
          simple
        >
        </Pagination>
        <Space>
          <Button @click="actions.onClose">关闭窗口</Button>
          <Button
            type="primary"
            :disabled="isEmptyMsg"
            @click="actions.onAllRead"
          >
            一键已读
          </Button>
        </Space>
      </div>
    </template>
  </Modal>
</template>
<script setup lang="ts">
import {
  Modal,
  Button,
  Space,
  Pagination,
  Empty,
  Badge,
} from '@arco-design/web-vue'
import { IconNotification } from '@arco-design/web-vue/es/icon'
// import { globalPageMsg, globalAllReadMsg } from '@/apis/SysSystem'
// import { dateFormater } from '@/utils/common'
import { useTable } from '@/components/BaseTable'
import { isEmpty, size } from 'lodash-es'
import { ref, computed } from 'vue'

function globalPageMsg(params: any) {
  // return http.get<any>(Source.globalPageMsg, { params })
  return Promise.resolve({
    records: [],
    total: 0,
    size: 10,
    current: 1,
    orders: [],
    optimizeCountSql: true,
    searchCount: true,
    countId: null,
    maxLimit: null,
    pages: 0,
  })
}

const visible = ref(false)

const { dataSource, pagination, run } = useTable<any>(globalPageMsg, {
  defaultSearchValue: {
    isRead: 1,
  },
})

setInterval(run, 1000 * 60)

const isEmptyMsg = computed(() => isEmpty(dataSource.value))

const actions = {
  onClose: () => {
    visible.value = false
  },
  onAllRead: async () => {
    // await globalAllReadMsg()
    run()
  },
}
</script>
<style lang="scss" scoped>
.header-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  overflow: hidden;
  font-size: 16px;
  color: var(--color-text-1);
  cursor: pointer;
  background-color: var(--color-fill-2);
  border-radius: 50%;
  &:hover {
    background-color: var(--color-fill-3);
  }
}
</style>

<style lang="scss">
.notify-container {
  height: 500px;
  .notify-container-empty {
    display: flex;
    align-items: center;
    height: 400px;
  }
  .notify-item {
    display: flex;
    grid-gap: 10px;
    font-size: 13px;
    &:not(:last-child) {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid var(--color-neutral-3);
    }
    .notify-item-icon {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      font-size: 22px;
      color: #fff;
      background-color: rgb(var(--primary-6));
      border-radius: 50%;
    }
    .notify-item-text {
      word-break: break-all;
      cursor: pointer;
    }
  }
}
.notify-container-footer {
  display: flex;
  justify-content: space-between;
}
</style>
