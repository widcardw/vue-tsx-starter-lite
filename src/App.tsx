import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld'
import './App.css'

export default defineComponent({
  props: {
  },

  setup(props) {

    return () => (
      <>
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      </>
    )
  }
})
