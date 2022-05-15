import { defineComponent, ref, watchEffect } from 'vue';
import { Icon } from "../../shared/Icon";
import { useSwipe } from '../../hooks/useSwipe';
import { useRouter } from 'vue-router';
import s from './welcomeCommon.module.scss';
export const First = defineComponent({
  setup() {
    const div = ref<HTMLDivElement>()
    const router = useRouter()
    const { swiping, direction } = useSwipe(div, {
      beforeStart: e => e.preventDefault()
    })
    watchEffect(() => {
      if (swiping.value && direction.value === 'left') {
        router.push('/welcome/2')
      }
    })
    return () => (
      <div class={s.card} ref={div}>
        <Icon name="pig" />
        <h2>会挣钱<br />还会省钱</h2>
      </div>
    )
  }
})