import Vue from "vue";
import Router from "vue-router";
import AllUser from "./components/AllUser";
import UserViewer from "./components/UserViewer";
import About from "./components/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "AllUser",
      component: AllUser
    },
    {
      path: "/user/:name",
      name: "UserViewer",
      component: UserViewer
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});
