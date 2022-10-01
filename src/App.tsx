import { defineComponent } from 'vue'
import './App.css'
import { RouterView } from 'vue-router'
import ToggleDark from '~/components/ToggleDark'

export default defineComponent({
  setup() {
    return () => (
      <>
        <main
          class={[
            'font-sans',
            'px-4 py-10',
            'text-center',
            'text-gray-700',
            'dark:text-gray-200',
          ]}
        >
          <RouterView />
          <ToggleDark />
        </main>
      </>
    )
  },
})
