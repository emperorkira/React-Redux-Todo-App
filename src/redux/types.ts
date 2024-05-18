// types.ts
export interface Todo {
    text: string;
    completed: boolean;
}

export interface RootState {
    todos: Todo[];
    filter: "ALL" | "COMPLETED" | "INCOMPLETE";
    searchTerm: string;
}

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const FILTER_TODOS = "FILTER_TODOS";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: { text: string };
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: { id: number };
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: { id: number };
}

interface MarkCompletedAction {
    type: typeof MARK_COMPLETED;
    payload: { id: number };
}

interface MarkIncompleteAction {
    type: typeof MARK_INCOMPLETE;
    payload: { id: number };
}

interface FilterTodosAction {
    type: typeof FILTER_TODOS;
    payload: { filter: "ALL" | "COMPLETED" | "INCOMPLETE" };
}

interface UpdateSearchTermAction {
    type: typeof UPDATE_SEARCH_TERM;
    payload: { searchTerm: string };
}

interface MarkAllCompletedAction {
    type: typeof MARK_ALL_COMPLETED;
}

export type TodoActionTypes =
    | AddTodoAction
    | ToggleTodoAction
    | RemoveTodoAction
    | MarkCompletedAction
    | MarkIncompleteAction
    | FilterTodosAction
    | UpdateSearchTermAction
    | MarkAllCompletedAction;
