import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

//npm install @mdi/font -D
import "@mdi/font/css/materialdesignicons.css";

import expense from "../themes/expense";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    themes: {
      light: expense,
    },
  },
});
