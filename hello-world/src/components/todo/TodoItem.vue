<template v-if="isEditMode">
  <span v-if="isEditMode">
    <input v-model="editableItem.name" placeholder="Enter value..." />
    <button v-on:click="update">Save</button>
  </span>
  <span v-else>
    <span>
      {{ item.id }} - {{ item.name }}
      <button v-on:click="edit()">Edit</button>
      <button class="remove-button" v-on:click="remove(item.id)">x</button>
    </span>
  </span>
</template>

<style scoped lang="scss">
.remove-button {
  color: red;
  margin-left: 5px;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TodoItemModel } from "./models";

@Component
export default class TodoItem extends Vue {
  @Prop() private item!: TodoItemModel;
  private isEditMode: boolean;
  private editableItem?: TodoItemModel | null = null;

  constructor() {
    super();
    this.isEditMode = false;
    //this.editableItem = null;
  }

  private edit(): void {
    this.isEditMode = true;
    this.editableItem = this.item;
  }

  private remove(id: number): void {
    this.$emit("remove", id);
    this.discard();
  }

  private update(): void {
    this.$emit("update", this.editableItem);
    this.discard();
  }

  private discard(): void {
    this.isEditMode = false;
    this.editableItem = null;
  }
}
</script>
