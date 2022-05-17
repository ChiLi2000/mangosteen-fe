import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import s from './startPage.module.scss';
export const startPage = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('hi')
    }
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>chili</Button>
        </div>
      </div>
    )
  }
})