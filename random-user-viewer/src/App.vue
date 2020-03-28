<template>
  <div id="app">
    <h1>
      <router-link to="/">Random User Viewer</router-link>
    </h1>

    <!-- <router-link to="/">home</router-link> -->

    <router-view />

    <hr />
    <user-history />
  </div>
</template>

<script>
import users from "./assets/data.json";
import UserItem from "./components/UserItem.vue";
import History from "./components/History";

export default {
  components: { "user-item": UserItem, "user-history": History },
  data: () => {
    return { users: users.results };
  },
  computed: {
    isHome() {
      console.log(this.$route.path);
      return this.$route.path == "/";
    }
  }
};
</script>