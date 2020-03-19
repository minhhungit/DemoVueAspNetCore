<template>
  <div>
    <TodoList v-bind:items="items" v-on:update="onUpdate" v-on:remove="onRemove" />
    <TodoItemAddNew v-on:add="onAddNewTodoItemWithComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TodoList from '@/components/todo-vuex/TodoList.vue';
import { TodoItemModel } from '@/components/todo-vuex/models';
import TodoItemAddNew from '@/components/todo-vuex/TodoItemAddNew.vue';
import { actionTypes } from '@/store/modules/todo-vuex/actions';

@Component({
  components: {
    TodoList,
    TodoItemAddNew,
  },
})
export default class TodoVuex extends Vue {
  private get items() {
    return this.$store.state.todoModule.todoItems;
  }

  public mounted(): void {
    this.$store.dispatch(actionTypes.LOAD_TODO_ITEMS);
  }

  private onUpdate(item: TodoItemModel): void {
    this.$store.dispatch(actionTypes.UPDATE_TODO, item);
  }

  private onRemove(id: number): void {
    this.$store.dispatch(actionTypes.REMOVE_TODO, id);
  }

  private onAddNewTodoItemWithComponent(name: string): void {
    this.$store.dispatch(actionTypes.ADD_TODO, name);
  }
}
</script>
