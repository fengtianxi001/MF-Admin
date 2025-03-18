<template>
  <Background>
    <div class="container-top">
      <img
        class="container-top-left"
        src="@/assets/images/character01.png"
        alt="背景图片"
      />
      <div class="container-top-right">
        <div class="container-title-primary">404</div>
        <div class="container-title-second">404 Page Not Found！</div>
      </div>
    </div>
    <div class="container-bottom">
      <div class="container-slogen">
        没找到页面！请检查你输入的URL地址是否正确或是否有该页面权限
      </div>
      <Button type="primary">返回首页</Button>
    </div>
  </Background>
</template>
<script setup lang="ts">
import { Button } from '@arco-design/web-vue'
import Background from './background.vue'
</script>
<style lang="scss" scoped>
.container-top {
  display: flex;
  .container-top-left {
    width: 300px;
    height: 300px;
  }
  .container-top-right {
    .container-title-primary {
      font-size: 200px;
    }
    .container-title-second {
      margin-top: 10px;
      font-size: 20px;
      text-align: end;
    }
  }
}
.container-bottom {
  width: 100%;
  text-align: end;
  .container-slogen {
    z-index: 999;
    width: 100%;
    margin: 0 0 30px;
    font-size: 16px;
    text-align: end;
  }
}
</style>
