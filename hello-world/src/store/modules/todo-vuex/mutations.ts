import { MutationTree } from 'vuex';
import { TodoState, TodoItem } from './state';

export const mutations: MutationTree<TodoState> = {
    setTodoItems(state: TodoState, todoItems: TodoItem[]): void {
        state.todoItems = [...todoItems];
    },
    add(state: TodoState, name: string): void {
        let maxId = Math.max(...state.todoItems.map(x => x.id), 0);
        const newItem: TodoItem = {
            id: ++maxId,
            name: name,
        };
        state.todoItems = [...state.todoItems, newItem];
    },
    update(state: TodoState, todoItem: TodoItem): void {
        const idx = state.todoItems.findIndex(g => g.id == todoItem.id);
        state.todoItems = [
            ...state.todoItems.slice(0, idx),
            todoItem,
            ...state.todoItems.slice(idx + 1, state.todoItems.length),
        ];
    },
    remove(state: TodoState, todoItemId: number): void {
        state.todoItems = state.todoItems.filter(g => g.id != todoItemId);
    },
};
