import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import Counter from '~/components/Counter'

export default defineComponent({
  setup() {
    const router = useRouter()
    const name = ref('')
    const go = () => {
      if (name.value.trim())
        router.push(`/hi/${encodeURIComponent(name.value)}`)
    }
    return () => (
      <>
        <div class="text-4xl flex-center">
          <div class="i-ri-vuejs-fill inline-block text-green" />
          +<span class="text-blue">TSX</span>
        </div>
        <p>Vue Tsx Template</p>
        <div class="m-3">
          <Counter class="btn" />
        </div>
        <input
          v-model={name.value}
          placeholder="What's your name?"
          type="text"
          autocomplete="false"
          class={[
            'px-4 py-2',
            'w-250px',
            'bg-transparent',
            'text-center text-gray-700 dark:text-gray-200',
            'border rounded border-gray-200 dark:border-gray-700',
            'outline-none active:outline-none',
          ]}
          onKeydown={ (event) => { event.key === 'Enter' && go() } }
        />
        <div>
          <button
            class="btn m-3 text-sm"
            disabled={name.value.trim() === ''}
            onClick={() => go()}
          >
            Go
          </button>
        </div>
      </>
    )
  },
})
