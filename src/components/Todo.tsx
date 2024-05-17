
import { BsPlus} from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo } from '../redux'

export const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState('');
    const handleAddToDo = (text:any) => {
        dispatch(add_todo(text))
    }
    const handleAddTodo = () => {
        if(!!newTodoText.trim()){
            handleAddToDo(newTodoText.trim());
            setNewTodoText("");
        }
    }
    return(
        <>
            <div className="max0w04xl mx-auto sm:mt-8 p-4 bg-gray-80 rounded">
                <h2 className=" mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal todo app</h2>
            </div>
            { /* input text and button */}
            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e)=> setNewTodoText(e.target.value)}className="flex-grow  w-screen p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type='text' id='addTodoInput' placeholder="Add todo"/>
                <button onClick={handleAddTodo} className='flex justify-items-start items-center ml-4 p-2 bg-blue-500 text-white rounded hober:bg-blue-600 focus:outline-none'> <BsPlus /> Todo </button>
            </div>
            { /* filter and search */}
            <div>
                <div></div>
            </div>
        </>
    )
}