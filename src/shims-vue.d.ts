/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.json' {
  const value: any
  export default value
}
declare module 'moment'
declare module 'balm-ui'
declare module 'balm-ui-plus'
