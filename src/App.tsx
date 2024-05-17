
import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux'
import { Todo } from './components'

function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App
