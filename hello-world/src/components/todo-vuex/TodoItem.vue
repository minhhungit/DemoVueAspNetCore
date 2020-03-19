<template v-if="isEditMode">
  <tr>
    <td>
      <strong>{{ item.id }}</strong>
    </td>
    <td style="min-width: 300px; text-align: left">
      <span v-if="isEditMode">
        <input v-model="editableItem.name" placeholder="Enter value..." />
      </span>
      <span v-else>
        <span>{{ item.name }}</span>
      </span>
    </td>
    <td style="min-width: 150px; text-align: left">
      <span v-if="isEditMode">
        <button v-on:click="update">Save</button>
        <button v-on:click="discard">Discard</button>
      </span>
      <span v-else>
        <span>
          <button v-on:click="edit()">Edit</button>
          <button size="small" class="remove-button" v-on:click="remove(item.id)">
            x
          </button>
        </span>
      </span>
    </td>
  </tr>
</template>

<style scoped lang="scss">
.remove-button {
  color: red;
  margin-left: 5px;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TodoItemModel } from './models';

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
    this.$emit('remove', id);
    this.discard();
  }

  private update(): void {
    this.$emit('update', this.editableItem);
    this.discard();
  }

  private discard(): void {
    this.isEditMode = false;
    this.editableItem = null;
  }
}
</script>
