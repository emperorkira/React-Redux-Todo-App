import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MARK_COMPLETED, MARK_ALL_COMPLETED, MARK_INCOMPLETE, FILTER_TODOS, UPDATE_SEARCH_TERM } from "."
//
export const add_todo = (text:any) => ({
    type: ADD_TODO,
    payload: {text}
});

export const toggle_todo = (id:number) => ({
    type: TOGGLE_TODO,
    payload: {id}
});

export const remove_todo = (id:number) => ({
    type: REMOVE_TODO,
    payload: {id}
});

export const mark_completed = (id:number) => ({
    type: MARK_COMPLETED,
    payload: {id}
});

export const mark_incomplete = (id:number) => ({
    type: MARK_INCOMPLETE,
    payload: {id}
});

export const filter_todos = (filter:any) => ({
    type: FILTER_TODOS,
    payload: {filter}
});

export const mark_all_completed = () => ({
    type: MARK_ALL_COMPLETED,
});

export const update_search_term = (searchTerm:any) => ({
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm}
});