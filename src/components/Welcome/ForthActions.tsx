import { RouterLink } from 'vue-router';
import s from './welcomeCommon.module.scss';
export const ForthActions = () => (
  <div class={s.actions}>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
    <RouterLink to="/start" >完成</RouterLink>
    <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
  </div>
)

ForthActions.displayName = 'ForthActions'