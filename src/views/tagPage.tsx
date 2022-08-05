import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
const tagPage = defineComponent({
  setup: (props,context) => {
    return () => (
      <RouterView/>
    )
  }
})

export default tagPage