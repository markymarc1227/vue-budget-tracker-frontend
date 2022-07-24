<template>
  <div>
    <v-app-bar color="seafoamgreen" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "LayoutHeader",

  data() {
    return {
      appTitle: "Budget Manager",
    };
  },
};
</script>

<style></style>
