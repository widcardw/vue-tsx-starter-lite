import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Counter from '~/components/Counter'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props) {
    const router = useRouter()
    return () => (
      <>
        <p>Hi, {props.name}!</p>
        <div class="m-3">
          <Counter class="btn" />
        </div>
        <div>
          <button
            class="btn m-3 text-sm"
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </>
    )
  },
})
