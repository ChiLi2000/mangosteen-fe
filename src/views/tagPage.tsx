import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export const tagPage = defineComponent({
  setup: (props,context) => {
    return () => (
      <RouterView/>
    )
  }
})