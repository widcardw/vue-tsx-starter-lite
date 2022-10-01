import { defineComponent } from 'vue'
import { isDark, toggleDark } from '~/composables'

export default defineComponent({
  setup() {
    return () => (
      <div
        class="icon-btn"
        onClick={() => toggleDark()}
      >
        {!isDark.value
          ? <div class="i-ri-sun-line" />
          : <div class="i-ri-moon-line" />}
      </div>
    )
  },
})
