import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import s from './welcome.module.scss';
import logo from '../assets/icons/assets/mangosteen.svg';

export const welcome = defineComponent({
  setup: (props, context) => {
    return () => 
    <div class={s.wrapper}>
      <header>
        <img src={logo} />
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}><RouterView /></main>
    </div>
  }
})