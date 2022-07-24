<template>
  <v-card elevation="3" outlined shaped class="ma-4 pa-3" min-width="350px">
    <v-cardTitle class="justify-center">Total Expenses</v-cardTitle>
    <v-divider class="mx-4"></v-divider>
    <v-cardText class="text-center text-h4">
      Php {{ $store.getters["expense/totalexpenses"] }}</v-cardText
    >
  </v-card>
</template>

<script>
export default {
  name: "TotalVue",
};
</script>
