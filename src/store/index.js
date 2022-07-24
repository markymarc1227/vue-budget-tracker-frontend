import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import expense from "./modules/expense";
import dialog from "./modules/dialog";

export default new Vuex.Store({
  modules: {
    expense,
    dialog,
  },
});
