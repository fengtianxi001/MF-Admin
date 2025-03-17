import { size } from 'lodash-es'
import { defineComponent, type PropType } from 'vue'
// import type { routesType } from '@/router/routes/types'
import { SubMenu, MenuItem } from '@arco-design/web-vue'

const LayoutMenuItem = defineComponent({
  name: 'LayoutMenuItem',
  props: {
    routes: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  setup(props) {
    const hasChild = (route: any) => {
      if (!route.children) return false
      const cache = route.children.filter((item: any) => !item.meta?.hideInMenu)
      return size(cache) >= 1
    }
    const hasOnlyOneChild = (route: any) => {
      const cache = route.children?.filter(
        (item: any) => !item.meta?.hideInMenu
      )
      return size(cache) === 1
    }
    return () =>
      props.routes.map((route) => {
        if (!hasChild(route)) {
          return (
            <MenuItem key={route.path}>
              {{
                default: () => <span>{route?.meta?.title}</span>,
                icon: () => (
                  <span class={[route.meta.icon, 'menu-icon']}></span>
                ),
              }}
            </MenuItem>
          )
        }
        if (hasOnlyOneChild(route)) {
          const cache = route.children![0]
          return (
            <MenuItem key={cache.path}>
              {{
                default: () => <span>{cache?.meta?.title}</span>,
                icon: () => (
                  <span class={[route.meta.icon, 'menu-icon']}></span>
                ),
              }}
            </MenuItem>
          )
        }
        return (
          <SubMenu key={route.path}>
            {{
              title: () => <span>{route?.meta?.title}</span>,
              icon: () => <span class={[route.meta.icon, 'menu-icon']}></span>,
              default: () => <LayoutMenuItem routes={route!.children} />,
            }}
          </SubMenu>
        )
      })
  },
})

export default LayoutMenuItem
