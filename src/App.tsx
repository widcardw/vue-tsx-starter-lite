import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld'
import './App.css'
import { RouterView } from 'vue-router';

export default defineComponent({
  props: {
  },

  setup(props) {

    return () => (
      <>
        <RouterView />
      </>
    )
  }
})
