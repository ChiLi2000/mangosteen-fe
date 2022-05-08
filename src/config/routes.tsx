import { welcome } from "../views/welcome";
import { First } from "../components/Welcome/First";
import { Second } from "../components/Welcome/Second";
import { Forth } from "../components/Welcome/Third";
import { Third } from "../components/Welcome/Forth";

export const routes = [
  { path: '/', redirect: '/welcome' },
  {
    path: '/welcome',
    component: welcome,
    children: [
      { path: '', redirect: '/welcome/1', },
      { path: '1', component: First, },
      { path: '2', component: Second, },
      { path: '3', component: Third, },
      { path: '4', component: Forth, },
    ]
  }
  ]