/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

import 'vue'

declare module 'vue' {
  interface HTMLAttributes {
    p?: unknown
    font?: unknown
    text?: unknown
    w?: unknown
    bg?: unknown
    border?: unknown
    outline?: unknown
    btn?: unknown
  }
}
