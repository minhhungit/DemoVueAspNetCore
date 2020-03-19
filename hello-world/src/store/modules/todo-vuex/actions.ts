import { ActionTree } from "vuex";
import { TodoState, TodoItem } from "./state";
import { RootState } from "@/store/state";

export const actions: ActionTree<TodoState, RootState> = {
  // @TODO: fetch data from api
  loadTodoItems({ commit }): void {
    const todoItems = [
      { id: 1, name: "AAAA" },
      { id: 2, name: "BBB" },
      { id: 3, name: "CCCC" },
      { id: 4, name: "DDDD" }
    ];
    commit("setTodoItems", todoItems);
  },
  add({ commit }, name: string): void {
    // @TODO: make the api request before commnitting to the store
    commit("add", name);
  },
  update({ commit }, todoItem: TodoItem): void {
    // @TODO: make the api request before commnitting to the store
    commit("update", todoItem);
  },
  remove({ commit }, todoItemId: number): void {
    // @TODO: make the api request before commnitting to the store
    commit("remove", todoItemId);
  }
};
