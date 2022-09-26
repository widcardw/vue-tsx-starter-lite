import { defineComponent } from 'vue'
import { isDark, toggleDark } from '../composables/dark'

export default defineComponent({
    setup(props) {
        
        return () => (
            <>
                <button icon-btn onClick={() => toggleDark()}>
                    {!isDark.value ? 
                        <div class="i-ri-sun-line" /> : 
                        <div class="i-ri-moon-line" />}
                </button>
            </>
        )
    }
})