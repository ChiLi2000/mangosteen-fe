import { defineComponent, PropType } from 'vue';
import { RouterView } from 'vue-router';
import s from './itemPage.module.scss';
const itemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
        <RouterView />
    )
  }
})

export default itemPage