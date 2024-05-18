// rootReducer.ts
import { combineReducers } from 'redux';
import { todoReducer } from './reducers';

const rootReducer = combineReducers({
    todosState: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
