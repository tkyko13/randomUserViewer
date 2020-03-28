<template>
  <div>
    <v-row>
      <v-col>
        <v-img class="img" :src="cUser.picture.large"></v-img>
      </v-col>
      <v-col>
        <v-list-item class="list">
          <v-list-item-content>
            <v-list-item-title>{{cUser.name.first + " " + cUser.name.last}}</v-list-item-title>
            <v-list-item-subtitle>age : {{cUser.dob.age}}</v-list-item-subtitle>
            <v-list-item-subtitle>city : {{cUser.location.city}}</v-list-item-subtitle>
            <v-list-item-subtitle>phone : {{cUser.phone}}</v-list-item-subtitle>
            <v-list-item-subtitle>phone : {{cUser.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import users from "../assets/data.json";
import store from "../store/index";

export default {
  store,
  data: () => {
    return {};
  },
  created: function() {
    // this.currentUser = users.results.find(e => {
    //   return e.name.first == this.$route.params.name;
    // });
  },
  mounted: function() {},
  watch: {
    // $route(to, from) {
    //   this.currentUser = users.results.find(e => {
    //     return e.name.first == to.params.name;
    //   });
    // }
  },
  computed: {
    cUser: function() {
      const cUser = users.results.find(e => {
        return e.name.first == this.$route.params.name;
      });
      store.dispatch("doUpdateHistory", cUser);
      return cUser;
    }
  }
};
</script>

<style>
.img {
}
</style>