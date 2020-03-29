<template>
  <div id="app">
    <v-app>
      <my-header />
      <!-- <h1>
        <router-link to="/">Random User Viewer</router-link>
      </h1>-->

      <!-- <router-link to="/">home</router-link> -->
      <!-- <h4>
        <a href="https://randomuser.me/">https://randomuser.me/</a>のAPIから取得した情報を
      </h4>-->
      <v-content>
        <router-view />

        <hr />
        <user-history />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import users from "./assets/data.json";
import Header from "./components/Header";
import UserItem from "./components/UserItem.vue";
import History from "./components/History";

export default {
  components: {
    "user-item": UserItem,
    "user-history": History,
    "my-header": Header
  },
  data: () => {
    return { users: users.results, drawer: false };
  },
  computed: {
    isHome() {
      console.log(this.$route.path);
      return this.$route.path == "/";
    }
  }
};
</script>