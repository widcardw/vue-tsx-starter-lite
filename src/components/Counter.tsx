import { defineComponent, ref, withModifiers } from 'vue'

export default defineComponent({
  props: {
    initValue: Number,
  },
  setup(props) {
    const count = ref(props.initValue || 0)

    const inc = () => {
      count.value++
    }
    return () => (
      <button
        onClick={withModifiers(inc, ['self'])}
      >
        count value is: {count.value}
      </button>
    )
  },
})
