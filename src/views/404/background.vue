<template>
  <div class="page">
    <svg
      class="page-bg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <path
        class="out-top"
        d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
      />
      <path
        class="in-top"
        d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
      />
      <!-- <path
        class="out-bottom"
        d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
      /> -->
      <!-- <path
        class="in-bottom"
        d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
      /> -->
    </svg>
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: SarasaMonoSC;
  color: var(--color-text-1);
  .page-bg {
    position: absolute;
    z-index: -2;
    width: 200%;
    height: 100%;

    // opacity: 0.5;
    .out-top {
      fill: var(--color-fill-2);
      transform-origin: 13px 25px;
      animation: rotate 20s linear infinite;
    }
    .in-top {
      fill: var(--color-bg-1);
      transform-origin: 13px 25px;
      animation: rotate 10s linear infinite;
    }
    .out-bottom {
      fill: var(--color-fill-2);
      transform-origin: 84px 93px;
      animation: rotate 25s linear infinite;
    }
    .in-bottom {
      fill: var(--color-bg-1);
      transform-origin: 84px 93px;
      animation: rotate 15s linear infinite;
    }
  }
  .page-main {
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
