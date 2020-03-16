<template>
  <div>
    <TodoList
      v-bind:items="items"
      v-on:update="onUpdate"
      v-on:remove="onRemove"
    />

    <div>
      <input
        type="text"
        v-model="newTodoItemName"
        placeholder="Enter new value..."
      />
      <button v-on:click="add()">Add</button>
    </div>

    <TodoItemAddNew v-on:add="onAddNewTodoItemWithComponent" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TodoList from "@/components/todo/TodoList.vue";
import { TodoItemModel } from "@/components/todo/models";
import TodoItemAddNew from "@/components/todo/TodoItemAddNew.vue";

@Component({
  components: {
    TodoList,
    TodoItemAddNew
  }
})
export default class Todo extends Vue {
  private items: TodoItemModel[] = [
    { id: 1, name: "Jin" },
    { id: 2, name: "Hello" },
    { id: 3, name: "World" },
    { id: 4, name: "!!!!" }
  ];

  private newTodoItemName?: string | null = null;

  private onUpdate(item: TodoItemModel): void {
    const idx = this.items.findIndex(g => g.id == item.id);
    console.log(idx);
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
