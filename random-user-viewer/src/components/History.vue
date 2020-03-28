<template>
  <div id="history">
    <h4>最近見たユーザー</h4>
    <v-row class="mb-6" no-gutters>
      <v-col v-for="n in historyUser.length" :key="n">
        <user-item :user="historyUser[n-1]" :num="n-1" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UserItem from "../components/UserItem.vue";

export default {
  components: { "user-item": UserItem },
  data() {
    return {
      historyUser: []
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "pushHistory") {
        this.historyUser = state.historyUser;
      }
    });
  },
  computed: {}
};
</script>