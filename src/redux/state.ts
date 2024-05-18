export interface RootState {
    todos: Todo[];
    filter: "ALL" | "COMPLETED" | "INCOMPLETE";
    searchTerm: string;
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
