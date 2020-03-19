<template>
  <div>
    <TodoList v-bind:items="items" v-on:update="onUpdate" v-on:remove="onRemove" />
    <TodoItemAddNew v-on:add="onAddNewTodoItemWithComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TodoList from '@/components/todo-vuex/TodoList.vue';
import TodoItemAddNew from '@/components/todo-vuex/TodoItemAddNew.vue';
import { TodoItemModel } from '@/components/todo-vuex/models';
import { actionTypesWithModuleName, actionTypes } from '@/store/modules/todo-vuex/actions';
import { namespace } from 'vuex-class';

const tdm = namespace('todoModule');

@Component({
  components: {
    TodoList,
    TodoItemAddNew,
  },
})
export default class TodoVuex extends Vue {
  @tdm.State('todoItems') private items!: TodoItemModel[];
  // private get items() {
  //   return this.$store.state.todoModule.todoItems;
  // }

  @tdm.Action(actionTypes.LOAD_TODO_ITEMS) private loadTodos!: () => void;
  public mounted(): void {
    //this.$store.dispatch(actionTypesWithModuleName.LOAD_TODO_ITEMS);
    this.loadTodos();
  }

  private onUpdate(item: TodoItemModel): void {
    this.$store.dispatch(actionTypesWithModuleName.UPDATE_TODO, item);
  }

  private onRemove(id: number): void {
    this.$store.dispatch(actionTypesWithModuleName.REMOVE_TODO, id);
  }

  private onAddNewTodoItemWithComponent(name: string): void {
    this.$store.dispatch(actionTypesWithModuleName.ADD_TODO, name);
  }
}
</script>
