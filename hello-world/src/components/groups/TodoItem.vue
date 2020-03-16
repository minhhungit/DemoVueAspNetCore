<template v-if="isEditMode">
  <span v-if="isEditMode">
    <input v-model="editableGroup.name" placeholder="Enter value..." />
    <button v-on:click="update">Save</button>
  </span>
  <span v-else>
    <span>
      {{ group.name }}
      <button v-on:click="edit()">Edit</button>
      <button class="remove-button" v-on:click="remove(group.id)">x</button>
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
  @Prop() private group!: TodoItemModel;
  private isEditMode: boolean;
  private editableGroup?: TodoItemModel | null = null;

  constructor() {
    super();
    this.isEditMode = false;
    this.editableGroup = null;
  }

  private edit(): void {
    this.isEditMode = true;
    this.editableGroup = this.group;
  }

  private remove(groupId: number): void {
    this.$emit("remove", groupId);
    this.discard();
  }

  private update(): void {
    this.$emit("update", this.editableGroup);
    this.discard();
  }

  private discard(): void {
    this.isEditMode = false;
    this.editableGroup = null;
  }
}
</script>
