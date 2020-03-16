<template>
  <div>
    <input type="text" v-model="todoItemName" placeholder="Enter value..." />
    <button v-on:click="addNewTodoItem()">Add using Component</button>
  </div>
</template>

<style scoped lang="scss">
// .remove-button {
//   color: red;
//   margin-left: 5px;
// }
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoItemAddNew extends Vue {
  private todoItemName?: string | null = null;

  private addNewTodoItem(): void {
    if (
      this.todoItemName !== null &&
      typeof this.todoItemName !== "undefined" &&
      this.todoItemName.trim().length > 0
    ) {
      this.$emit("add", this.todoItemName);
      this.todoItemName = null;
    } else {
      alert("Please enter value for new todo");
    }
  }
}
</script>
