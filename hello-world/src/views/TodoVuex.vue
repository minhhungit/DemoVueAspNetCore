<template>
  <div>
    <TodoList v-bind:items="items" />
    <TodoItemAddNew v-on:add="onAddNewTodoItemWithComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoList from "@/components/todo-vuex/TodoList.vue";
import TodoItemAddNew from "@/components/todo-vuex/TodoItemAddNew.vue";

@Component({
  components: {
    TodoList,
    TodoItemAddNew
  }
})
export default class TodoVuex extends Vue {
  private get items() {
    return this.$store.state.todoModule.todoItems;
  }

  public mounted(): void {
    this.$store.dispatch("todoModule/loadTodoItems");
  }

  private onAddNewTodoItemWithComponent(name: string): void {
    this.$store.dispatch("todoModule/add", name);
  }
}
</script>
