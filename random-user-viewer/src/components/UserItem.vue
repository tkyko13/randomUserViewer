<template>
  <!-- <router-link :to="{ path:'/user/'+user.name.first, params: user}"> -->
  <v-card class="item" width="170px">
    <router-link :to="'/user/'+user.name.first">
      <v-img :src="user.picture.medium"></v-img>
      <v-card-text>{{user.name.first}} {{user.name.last}}</v-card-text>
      <!-- {{num}} -->
    </router-link>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "UserItem",
  props: ["user", "num"]
};
</script>

<style lang="scss">
.item {
  margin: 1rem 1rem;
  padding: 0.5rem;
}
</style>