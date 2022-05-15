import { FunctionalComponent } from 'vue';
import { Icon } from "../../shared/Icon";
import s from './welcomeCommon.module.scss';
export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <Icon name="pig" />
      <h2>会挣钱<br />还会省钱</h2>
    </div>
  )
}

First.displayName = 'First'