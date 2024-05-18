// FilterButton.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filter_todos, mark_all_completed, AppDispatch, RootState } from '../redux';


interface FilterButtonProps {
    className?: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ className = '' }) => {
    const dispatch: AppDispatch = useDispatch();
    const currentFilter = useSelector((state: RootState) => state.todosState.filter);

    const handleFilter = (filter: "ALL" | "COMPLETED" | "INCOMPLETE") => {
        dispatch(filter_todos(filter));
    };

    return (
        <div className={`${className} flex space-x-4 items-center`}>
            <select
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value as "ALL" | "COMPLETED" | "INCOMPLETE")}
                className="rounded-l flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            >
                <option value='ALL'>Default</option>
                <option value='COMPLETED'>Completed</option>
                <option value='INCOMPLETE'>Incomplete</option>
            </select>
            <button
                onClick={() => dispatch(mark_all_completed())}
                className="text-sm px-2 py-1 bg-purple-500 ml-2 text-white rounded-l"
            >
                Mark all completed
            </button>
        </div>
    );
};