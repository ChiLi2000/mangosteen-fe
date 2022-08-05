import { RouteRecordRaw } from "vue-router";
import { First } from "../components/Welcome/First";
import { FirstActions } from "../components/Welcome/FirstActions";
import { Forth } from "../components/Welcome/Forth";
import { ForthActions } from "../components/Welcome/ForthActions";
import { Second } from "../components/Welcome/Second";
import { SecondActions } from "../components/Welcome/SecondActions";
import { Third } from "../components/Welcome/Third";
import { ThirdActions } from "../components/Welcome/ThirdActions";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: ()=> import('../views/welcome'),
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipFeatures') === 'yes' ? next('/items') : next()
    },
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: "1",
        name: "Welcome1",
        components: { main: First, footer: FirstActions },
      },
      {
        path: "2",
        name: "Welcome2",
        components: { main: Second, footer: SecondActions },
      },
      {
        path: "3",
        name: "Welcome3",
        components: { main: Third, footer: ThirdActions },
      },
      {
        path: "4",
        name: "Welcome4",
        components: { main: Forth, footer: ForthActions },
      },
    ],
  },
  {
    path: "/items",
    component: ()=> import('../views/itemPage'),
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: ()=> import('../views/tagPage'),
    children: [
      { path: "create", component: ()=> import('../components/tag/TagCreate') },
      { path: ":id/edit", component: ()=> import('../components/tag/TagEdit') },
    ],
  },
  {
    path: "/sign_in",
    component: ()=> import('../views/signInPage'),
  },
  {
    path: '/statistics', component: ()=> import('../views/statisticsPage')
  },{
    path: '/export', component: ()=> import('../shared/ComingSoon')
  },{
    path: '/notify', component: ()=> import('../shared/ComingSoon')
  }
];
