import Vue from "vue";
import Router from "vue-router";
import AllUser from "./components/AllUser.vue";
import Counter from "./components/Counter.vue";
import UserViewer from "./components/UserViewer";

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
      path: "/counter",
      name: "Counter",
      component: Counter
    },
    {
      path: "/user/:name",
      name: "UserViewer",
      component: UserViewer
    }
  ]
});
