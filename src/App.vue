<template>
  <v-app>
    <layout-header />
    <v-main>
      <router-view />
    </v-main>
    <error-dialog />
    <info-dialog />
  </v-app>
</template>

<script>
import LayoutHeader from "./components/layout/LayoutHeader.vue";
import ErrorDialog from "./components/dialogs/ErrorDialog";
import InfoDialog from "./components/dialogs/InfoDialog";
import ApiInterceptors from "./mixins/ApiInterceptors";

import { mapActions } from "vuex";

export default {
  name: "App",
  mixins: [ApiInterceptors],
  components: { LayoutHeader, ErrorDialog, InfoDialog },
  created() {
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  },
  methods: {
    ...mapActions("dialog", ["setError"]),
  },
};
</script>

<style scoped>
.v-application {
  background: rgb(3, 213, 102);
  background: linear-gradient(
    232deg,
    rgba(3, 213, 102, 1) 0%,
    rgba(123, 179, 9, 1) 100%
  );
}
</style>
