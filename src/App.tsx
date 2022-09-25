import { defineComponent } from 'vue';
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
