export interface TodoItem {
    id: number;
    name: string;
    rowVersion?: string;
}

export interface TodoState {
    todoItems: TodoItem[];
}
