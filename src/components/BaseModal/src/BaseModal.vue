<template>
  <Modal
    ok-text="提交"
    cancel-text="取消"
    title-align="center"
    popup-container="#app"
    :width="800"
    :visible="visible"
    :unmount-on-close="true"
    :on-before-ok="onBeforeOk"
    :on-before-cancel="onBeforeClose"
    :ok-button-props="{ disabled: loading }"
    @ok="onOk"
    @cancel="onClose"
  >
    <template v-for="(_, scopeSlotName) in $slots" #[scopeSlotName]="scope">
      <slot :name="scopeSlotName" v-bind="scope" />
    </template>
  </Modal>
</template>
<script setup lang="ts">
import { Modal, Spin } from '@arco-design/web-vue'
import { isFunction } from 'lodash-es'
import { useVisible } from '@/hooks/useVisible'

const { visible, hide } = useVisible(true)

interface PropsType {
  onBeforeConfirm?: () => Promise<boolean>
  onBeforeDeny?: () => Promise<boolean>
  onConfirm?: () => unknown
  onCancel?: () => void
  resolve?: (value: any) => void
  loading?: boolean
}
const props = defineProps<PropsType>()

const onBeforeOk = async () => {
  const { onBeforeDeny, resolve } = props
  if (isFunction(onBeforeDeny)) {
    const result = await onBeforeDeny()
    if (result === false) return false
  }
  resolve?.(true)
  return true
}

const onBeforeClose = () => {
  const { onBeforeDeny, resolve } = props
  if (isFunction(onBeforeDeny)) {
    const result = onBeforeDeny()
    if (result === false) return false
  }
  // resolve?.(true)
  return true
}

const onOk = async () => {
  const { onConfirm, resolve } = props
  if (isFunction(onConfirm)) {
    const result = await onConfirm()
    if (result !== false) {
      resolve?.(true)
      hide()
    }
  } else {
    hide()
    resolve?.(true)
  }
}

const onClose = () => {
  const { onCancel, resolve } = props
  isFunction(onCancel) && onCancel()
  isFunction(resolve) && resolve(false)
  hide()
}

defineExpose({
  show: () => {
    visible.value = true
  },
  hide: () => {
    visible.value = false
  },
})
</script>
