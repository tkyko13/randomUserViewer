<template>
  <div id="history">
    <!-- <p>{{ history }}</p> -->
    <div>
      苗字：
      <input v-model="lastName" />
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
// import store from "../store/index";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      lastName: ""
    };
  },
  watch: {
    lastName(val) {
      this.setLastName(val);
    },
    firstName(val) {
      this.setFirstName(val);
    }
  },
  methods: {
    ...mapMutations("sample/storeWatch", ["setLastName", "setFirstName"])
  },
  mounted() {},
  computed: {
    history() {
      console.log(this.$store.state.history);
      return this.$store.state.history;
    }
    // history() {
    //   return this.store.getters["getHistoryUser"];
    // }
    // ...mapGetters(["historyUser"])
  }
};
</script>