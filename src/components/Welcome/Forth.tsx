import { FunctionalComponent } from "vue";
import { Icon } from "../../shared/Icon";
import s from './welcomeCommon.module.scss';
export const Forth: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <Icon name="cloud" />
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  );
}

Forth.displayName = 'Forth'