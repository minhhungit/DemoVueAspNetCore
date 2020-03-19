<template>
    <div>
        <a-form layout="inline">
            <a-form-item label="Name"></a-form-item>
            <a-form-item>
                <a-input type="text" v-model="todoItemName" placeholder="Enter value..." />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" v-on:click="addNewTodoItem()">
                    Add using Component
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<style scoped lang="scss">
// .remove-button {
//   color: red;
//   margin-left: 5px;
// }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TodoItemAddNew extends Vue {
    private todoItemName?: string | null = null;

    private addNewTodoItem(): void {
        if (
            this.todoItemName !== null &&
            typeof this.todoItemName !== 'undefined' &&
            this.todoItemName.trim().length > 0
        ) {
            this.$emit('add', this.todoItemName);
            this.todoItemName = null;
        } else {
            this.$warning({
                title: 'Add todo',
                content: 'Please enter value first',
            });
        }
    }
}
</script>
