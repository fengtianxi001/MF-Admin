import type { App } from 'vue'
// import Arco from '@arco-design/web-vue'
import autofit from 'autofit.js'
import '@/assets/fontawesome/all.css'
import '@/assets/fonts/SarasaMonoSC/result.css'
import '@/assets/styles/reset.css'
import '@arco-design/web-vue/es/index.less'
import 'leaflet/dist/leaflet.css'
import 'animate.css'

/**
 * 插件注册程序, 完成以下主要步骤
 * - 全局组件、依赖、样式注册
 * - 调用`autofit.init`方法初始化自适应
 */

export const setupPlugins = async (app: App<Element>) => {
  // app.use(Arco)

  const ScreenSize = {
    big: [2560, 1440],
    normal: [1920, 1080],
    small: [1500, 900],
  }['small']

  autofit.init({
    el: '#app',
    dw: ScreenSize[0],
    dh: ScreenSize[1],
    resize: true,
    ignore: ['.map-local-marker'],
  })
}

export default setupPlugins
