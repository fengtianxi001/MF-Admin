import { useStatePersistence } from '@/hooks'
import { computed } from 'vue'
import { findIndex, remove } from 'lodash-es'
import router from '@/router'
import type { RouteLocationNormalized } from 'vue-router'

interface TabsType {
  title: string
  path: string
  fixed: boolean
}

const white = ['/login', '/404', '/dashboard']

export const tabs = useStatePersistence<TabsType[]>('AppTabs', {
  defaultValue: [],
})

export const current = computed<TabsType>(() => ({
  title: <string>router.currentRoute.value.meta.title,
  path: router.currentRoute.value.path,
  fixed: false,
}))

export const tabAppend = (tab: RouteLocationNormalized) => {
  if (white.includes(tab.path)) return undefined
  const isExit = tabs.value.some((item) => item.path === tab.path)
  if (isExit) return undefined
  tabs.value.push({
    title: (tab.meta.title as string) ?? '未命名',
    path: tab.path,
    fixed: false,
  })
  return undefined
}

export const tabReload = (tab: TabsType) => {
  const isCurrent = current.value.path === tab.path
  if (isCurrent) return window.location.reload()
  router.push(tab.path)
  return undefined
}

export const tabClose = (tab: TabsType) => {
  // 因为会始终保留一个首页标签, 所以不需要做空判断
  // 1.先判断是否是当前标签, 如果是, 则跳转到下一个标签,如果不是, 则直接删除
  const isCurrent = current.value.path === tab.path
  if (isCurrent) {
    const index = findIndex(tabs.value, (item) => item.path === tab.path)
    const next = tabs.value[index + 1] || tabs.value[index - 1]
    router.push(next?.path || '/')
  }
  remove(tabs.value, (item) => item.path === tab.path)
}

export const tabOthersClose = (tab: TabsType) => {
  // 保留当前标签、固定标签、首页, 然后删除其他标签
  const survival = tabs.value
    .filter((item) => item.fixed || item.path === tab.path)
    .map((item) => item.path)
  remove(tabs.value, (item) => !survival.includes(item.path))
  router.push(tab.path || '/')
}

export const tabChange = (tab: TabsType) => {
  router.push(tab.path)
}

export const tabToggleFixed = (tab: TabsType) => {
  tab.fixed = !tab.fixed
}
