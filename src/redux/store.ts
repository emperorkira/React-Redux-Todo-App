import { createStore } from 'redux'
import { todoReducer } from '.'
import { composeWithDevTools} from '@redux-devtools/extension'

export const store:any = createStore(todoReducer, composeWithDevTools());

