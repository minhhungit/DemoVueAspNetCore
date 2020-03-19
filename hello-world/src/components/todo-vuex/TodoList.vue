<template>
    <ul>
        <li v-for="tdi in items" v-bind:key="tdi.id">
            <TodoItem v-bind:item="tdi" v-on:update="onUpdate" v-on:remove="onRemove" />
        </li>
    </ul>
</template>

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
        this.$store.dispatch('todoModule/update', item);
    }

    private onRemove(id: number): void {
        this.$store.dispatch('todoModule/remove', id);
    }
}
</script>
