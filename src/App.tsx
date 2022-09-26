import { defineComponent } from 'vue';
import './App.css'
import { RouterView } from 'vue-router';
import ToggleDark from './components/ToggleDark';

export default defineComponent({
  props: {
  },

  setup(props) {

    return () => (
      <>
        <RouterView />
        <ToggleDark />
      </>
    )
  }
})
