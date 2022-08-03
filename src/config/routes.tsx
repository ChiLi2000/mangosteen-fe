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
import { startPage } from "../views/startPage";
import { ItemCreate } from "../components/item/ItemCreate";
import { ItemList } from "../components/item/ItemList";
import { itemPage } from "../views/itemPage";
import { tagPage } from "../views/tagPage";
import { TagCreate } from "../components/tag/TagCreate";
import { TagEdit } from "../components/tag/TagEdit";
import { signInPage } from "../views/signInPage";
import { statisticsPage } from "../views/statisticsPage";
import { ComingSoon } from "../shared/ComingSoon";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: welcome,
    beforeEnter: (to, from, next) => {
      localStorage.getItem('skipFeatures') === 'yes' ? next('/start') : next()
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
  { path: "/start", component: startPage },
  {
    path: "/items",
    component: itemPage,
    children: [
      { path: "", component: ItemList },
      { path: "create", component: ItemCreate },
    ],
  },
  {
    path: "/tags",
    component: tagPage,
    children: [
      { path: "create", component: TagCreate },
      { path: ":id/edit", component: TagEdit },
    ],
  },
  {
    path: "/sign_in",
    component: signInPage,
  },
  {
    path: '/statistics', component: statisticsPage
  },{
    path: '/export', component: ComingSoon
  },{
    path: '/notify', component: ComingSoon
  }
];
