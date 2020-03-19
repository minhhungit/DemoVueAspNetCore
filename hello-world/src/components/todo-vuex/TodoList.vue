<template>
  <table border="1" class="todo-items">
    <tr>
      <td style="text-align: left; font-weight: bold;">STT</td>
      <td style="text-align: left; font-weight: bold;">Todo</td>
      <td />
    </tr>
    <TodoItem
      v-for="tdi in items"
      v-bind:key="tdi.id"
      v-bind:item="tdi"
      v-on:update="onUpdate"
      v-on:remove="onRemove"
    />
  </table>
</template>

<style scoped lang="scss">
.todo-items {
  margin: 0 auto;
  width: 400px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import { TodoItemModel } from '@/components/todo-vuex/models/todo-item-model';

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
