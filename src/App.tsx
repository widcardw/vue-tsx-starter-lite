import { defineComponent } from 'vue'
import './App.css'
import { RouterView } from 'vue-router'
import ToggleDark from '~/components/ToggleDark'

export default defineComponent({
  setup() {
    return () => (
      <>
        <main
          font="sans"
          p="x-4 y-10"
          text="center gray-700 dark:gray-200"
        >
          <RouterView />
          <ToggleDark />
        </main>
      </>
    )
  },
})
