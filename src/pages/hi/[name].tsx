import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    name: String,
  },
  setup(props) {
    const router = useRouter()
    return () => (
      <>
        <p>Hi, {props.name}!</p>
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
