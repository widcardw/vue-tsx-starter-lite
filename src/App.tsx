import { defineComponent } from 'vue'
import './App.css'
import { RouterView } from 'vue-router'
import ToggleDark from '~/components/ToggleDark'

export default defineComponent({
  setup() {
    return () => (
      <>
        {/**
           * @unocss/transformer-variant-group
           * automatically transform variant group classes
           */}
        <main
          class={[
            'text-(center gray-700) dark:text-gray-200',
            'p-(x-4 y-10)',
            'font-sans',
          ]}
        >
          <RouterView />
          <ToggleDark />
        </main>
      </>
    )
  },
})
