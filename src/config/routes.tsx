import { Foot } from "../views/Foot";
import { Head } from "../views/Head";
import { welcome } from "../views/welcome";
import { First } from "../components/Welcome/First";

export const routes = [
    { path: '/', component: Head },
    { path: '/about', component: Foot },
    {
      path: '/welcome',
      component: welcome,
      children: [
        { path: '1', component: First, }
      ]
    }
  ]