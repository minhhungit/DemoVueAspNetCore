<template>
  <div>
    <TodoList
      v-bind:items="items"
      v-on:update="onUpdate"
      v-on:remove="onRemove"
    />

    <TodoItemAddNew v-on:add="onAddNewTodoItemWithComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoList from "@/components/todo-vuex/TodoList.vue";
import { TodoItemModel } from "@/components/todo-vuex/models";
import TodoItemAddNew from "@/components/todo-vuex/TodoItemAddNew.vue";

@Component({
  components: {
    TodoList,
    TodoItemAddNew
  }
})
export default class TodoVuex extends Vue {
  private items: TodoItemModel[] = [
    { id: 1, name: "AAAA" },
    { id: 2, name: "BBB" },
    { id: 3, name: "CCCC" },
    { id: 4, name: "DDDD" }
  ];

  private newTodoItemName?: string | null = null;

  private onUpdate(item: TodoItemModel): void {
    const idx = this.items.findIndex(g => g.id == item.id);
    this.items = [
      ...this.items.slice(0, idx),
      item,
      ...this.items.slice(idx + 1, this.items.length)
    ];
  }

  private onRemove(id: number): void {
    this.items = this.items.filter(g => g.id != id);
  }

  // add v1
  private add(): void {
    if (
      this.newTodoItemName !== null &&
      typeof this.newTodoItemName !== "undefined" &&
      this.newTodoItemName.trim().length > 0
    ) {
      const maxId = Math.max(...this.items.map(x => x.id), 0);
      this.items.push({
        id: (maxId === Infinity ? 0 : maxId) + 1,
        name: this.newTodoItemName
      });

      this.newTodoItemName = null;
    } else {
      alert("Please enter value for new todo");
    }
  }

  // add v2 - using component and $emit
  private onAddNewTodoItemWithComponent(name: string): void {
    const maxId = Math.max(...this.items.map(x => x.id), 0);
    this.items.push({
      id: (maxId === Infinity ? 0 : maxId) + 1,
      name: name
    });
  }
}
</script>
