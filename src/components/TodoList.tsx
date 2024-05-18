import React from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../redux/types'; // Ensure these types are correctly imported from your types file

export const TodoList: React.FC = () => {
    const filterTodos = useSelector((state: RootState) => {
        // Ensure state.todos is not undefined before accessing its properties
        const todos = state.todos || [];
        const filter = state.filter || "ALL";
        const searchTerm = (state.searchTerm || '').toLowerCase();

        return todos.filter((todo) => {
            const matchFilter = (filter === "COMPLETED" && todo.completed) ||
                                (filter === "INCOMPLETE" && !todo.completed) ||
                                (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);
            return matchFilter && matchSearch;
        });
    });

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-80 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Todo List</h2>
            <ul>
                {filterTodos.map((todo, index) => (
                    <li key={index} className="mb-4 p-2 bg-white rounded shadow">
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
