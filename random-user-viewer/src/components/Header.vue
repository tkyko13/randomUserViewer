<template>
  <div>
    <v-app-bar color="dark accent-4" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <v-btn text large v-on:click="linkHome">Random User Viewer</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-on:click="linkAbout">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 0
    };
  },
  methods: {
    linkHome() {
      this.$router.push("/");
    },
    linkAbout() {
      this.$router.push("/about");
    }
  }
};
</script>