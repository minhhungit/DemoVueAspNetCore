<template>
  <div>
    <TodoList
      v-bind:groups="groups"
      v-on:update="onUpdate"
      v-on:remove="onRemove"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoList from "@/components/groups/TodoList.vue";
import { TodoItemModel } from "@/components/groups/models";

@Component({
  components: {
    TodoList
  }
})
export default class Todo extends Vue {
  private groups: TodoItemModel[] = [
    { id: 1, name: "Jin" },
    { id: 2, name: "Hello" },
    { id: 3, name: "World" },
    { id: 4, name: "!!!!" }
  ];

  private onUpdate(group: TodoItemModel): void {
    const idx = this.groups.findIndex(g => g.id == group.id);
    this.groups = [
      ...this.groups.slice(0, idx),
      group,
      ...this.groups.slice(idx + 1, this.groups.length)
    ];
  }

  private onRemove(id: number): void {
    this.groups = this.groups.filter(g => g.id != id);
  }
}
</script>
