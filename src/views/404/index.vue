<template>
  <div class="container">
    <div>404</div>
    <div>404 Page Not Found！</div>
    <div>没找到页面！请检查你输入的URL地址是否正确或是否有该页面权限</div>
    <Button type="primary">返回首页</Button>
  </div>
</template>
<script setup lang="ts">
import { Button } from '@arco-design/web-vue'
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-text-1);
  div:nth-child(1) {
    font-size: 200px;
  }
  div:nth-child(2) {
    margin: 20px 0;
    font-size: 20px;
  }
  div:nth-child(3) {
    margin: 0 0 30px;
    font-size: 16px;
  }
}
</style>
