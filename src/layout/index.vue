<template>
  <Layout class="layout">
    <LayoutSider class="layout-sider" :collapsed="collapsed">
      <LayoutBrand :collapsed="collapsed" />
      <LayoutMenu :collapsed="collapsed" :routes="routes" />
    </LayoutSider>
    <Layout class="layout-main">
      <LayoutHeader v-model:collapsed="collapsed" />
      <LayoutTabs />
      <div class="layout-content">
        <router-view v-slot="{ Component }">
          <transition name="slide">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </Layout>
  </Layout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Layout, LayoutSider } from '@arco-design/web-vue'
import {
  LayoutBrand,
  LayoutMenu,
  LayoutHeader,
  LayoutTabs,
} from '@/layout/components'
import { routes } from '@/router/routes'

const collapsed = ref(false)
</script>

<style lang="scss">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: SarasaMonoSC;
  color: var(--color-text-1);
  background-color: var(--color-bg-1);
  .layout-sider {
    width: 200px;
    height: 100%;
    background-color: var(--color-menu-dark-bg);
  }
  .layout-main {
    height: 100%;
    background-color: var(--color-fill-2);
    .layout-content {
      height: calc(100% - 48px - 32px);
      .page {
        box-sizing: border-box;
        height: 100%;
        padding: 20px;
      }
    }
  }
}
</style>
<style>
.slide-enter-active {
  animation: slideInLeft 0.4s;
}
</style>
