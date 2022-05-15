import { RouteRecordRaw } from "vue-router";
import { First } from "../components/Welcome/First";
import { FirstActions } from "../components/Welcome/FirstActions";
import { Forth } from "../components/Welcome/Forth";
import { ForthActions } from "../components/Welcome/ForthActions";
import { Second } from "../components/Welcome/Second";
import { SecondActions } from "../components/Welcome/SecondActions";
import { Third } from "../components/Welcome/Third";
import { ThirdActions } from "../components/Welcome/ThirdActions";
import { welcome } from "../views/welcome";

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: welcome,
    children: [
      { path: '', redirect: '/welcome/1', },
      { path: '1', components: { main: First, footer: FirstActions }, },
      { path: '2', components: { main: Second, footer: SecondActions }, },
      { path: '3', components: { main: Third, footer: ThirdActions }, },
      { path: '4', components: { main: Forth, footer: ForthActions }, },
    ]
  }
]