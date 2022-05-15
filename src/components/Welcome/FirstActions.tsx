import { RouterLink } from 'vue-router';
import { FunctionalComponent } from 'vue';
import s from './welcomeCommon.module.scss';
export const FirstActions: FunctionalComponent = () => {
  return <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/welcome/2" >下一页</RouterLink>
    <RouterLink to="/start" >跳过</RouterLink>
  </div>
}

FirstActions.displayName = 'FirstActions'