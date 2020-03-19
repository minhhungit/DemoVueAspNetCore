import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { todoModule } from "./modules/todo-vuex";
import { RootState } from "./state";

Vue.use(Vuex);

const options: StoreOptions<RootState> = {
  state: {},
  modules: {
    todoModule
  }
};

export default new Vuex.Store(options);
