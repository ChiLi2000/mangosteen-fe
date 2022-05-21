import { defineComponent, PropType } from 'vue';
import s from './itemPage.module.scss';
export const itemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>hi</div>
    )
  }
})