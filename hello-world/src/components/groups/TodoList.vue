<template>
  <ul>
    <li v-for="group in groups" v-bind:key="group.id">
      <TodoItem
        v-bind:group="group"
        v-on:update="onUpdate"
        v-on:remove="onRemove"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import { TodoItemModel } from "@/components/groups/models/todo-item-model";

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  @Prop() private groups!: TodoItemModel[];

  private onUpdate(group: TodoItemModel): void {
    this.$emit("update", group);
  }

  private onRemove(id: number): void {
    this.$emit("remove", id);
  }
}
</script>
