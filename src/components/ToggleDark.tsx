import { defineComponent } from 'vue'
import { isDark, toggleDark } from '~/composables'

export default defineComponent({
  setup() {
    return () => (
      <div
        icon-btn
        onClick={() => toggleDark()}
      >
        {!isDark.value
          ? <div i-ri-sun-line />
          : <div i-ri-moon-line />}
      </div>
    )
  },
})
