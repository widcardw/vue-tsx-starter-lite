import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

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
        <div text-4xl flex-center>
          <div i-ri-vuejs-fill inline-block text-green />
          +<span text-blue>TSX</span>
        </div>
        <p>Vue Tsx Template</p>
        {/** pass unocss classes with attributes
           * However, you should add the attribute name to `env.d.ts`
           * so that TSX does not warns.
           */}
        <input
          v-model={name.value}
          placeholder="What's your name?"
          type="text"
          autocomplete="false"
          p="x-4 y-2"
          w="250px"
          bg="transparent"
          text="center gray-700 dark:gray-200"
          border="~ rounded gray-200 dark:gray-700"
          outline="none active:none"
          onKeydown={(event) => { event.key === 'Enter' && go() }}
        />
        <div>
          <button
            btn m-3 text-sm
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
