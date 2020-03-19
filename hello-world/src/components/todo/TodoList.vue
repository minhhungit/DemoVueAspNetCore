<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.id">
      <TodoItem v-bind:item="item" v-on:update="onUpdate" v-on:remove="onRemove" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import { TodoItemModel } from '@/components/todo/models/todo-item-model';

@Component({
  components: {
    TodoItem,
  },
})
export default class TodoList extends Vue {
  @Prop() private items!: TodoItemModel[];

  private onUpdate(item: TodoItemModel): void {
    this.$emit('update', item);
  }

  private onRemove(id: number): void {
    this.$emit('remove', id);
  }
}
</script>
