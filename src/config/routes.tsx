import { welcome } from "../views/welcome";
import { First } from "../components/Welcome/First";

export const routes = [
  { path: '/', redirect: '/welcome' },
    {
      path: '/welcome',
      component: welcome,
      children: [
        { path: '', redirect: '/welcome/1', },
        { path: '1', component: First, }
      ]
    }
  ]