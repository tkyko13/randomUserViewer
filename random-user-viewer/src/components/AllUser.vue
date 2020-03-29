<template>
  <v-container>
    <h2>全てのユーザー</h2>
    <v-row class="mb-6" no-gutters>
      <v-col v-for="n in users.length" :key="n">
        <user-item :user="users[n-1]" :num="n-1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import users from "../assets/data.json";
import UserItem from "../components/UserItem.vue";

export default {
  components: { "user-item": UserItem },
  data: () => {
    return { users: users.results };
  }
};
</script>