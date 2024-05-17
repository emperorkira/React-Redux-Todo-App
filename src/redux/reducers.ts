import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, MARK_COMPLETED, MARK_INCOMPLETE, FILTER_TODOS, UPDATE_SEARCH_TERM, MARK_ALL_COMPLETED } from "."


const initial_state:any = {
    todos: [],
    filter: "ALL",
    searchTerm: ""
}

export const todoReducer = (state:any = initial_state, action:any) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos:[...state.todos,{text: action.payload.text, completed:false}],
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo:any,index:number) => (index === action.payload.id) ? {...todo, completed:todo.completed} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter((_todo:any,index:number)=> { index !== action.payload.id}),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo:any,index:number) => (index === action.payload.id) ? {...todo, completed: true} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        case MARK_INCOMPLETE:
            return {
                todos: state.todos.map((todo:any,index:number) => (index === action.payload.id) ? {...todo, completed: false} : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            } 
        case FILTER_TODOS:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            } 
        case UPDATE_SEARCH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }
        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map ( (todo:any) => ({...todo, completed:true})),
                filter: state.filter,
                searchTerm: state.searchTerm
            }
        default:
            break;
    }   
}