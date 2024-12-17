import React, { useRef } from 'react';
import { useTodoStore } from '../store/hooks/useTodoStore';
import { TodoItemProps } from '../types/props.types';
import TodoItemPriority from './TodoItemPriority';

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const { selectTodo } = useTodoStore();
	const checkboxRef = useRef<HTMLInputElement>(null);

	const handleDivClick = () => {
		if (checkboxRef.current) {
			checkboxRef.current.click();
		}
	};

	return (
		<div className="w-full border-b-2 p-2 text-left" onClick={handleDivClick}>
			<div className="flex">
				{!todo.completed && (
					<div className="me-4 ms-2 flex items-center">
						<input
							type="checkbox"
							className="size-4 rounded border-gray-300"
							id="checkbox"
							checked={todo.selected}
							onChange={() => selectTodo(todo)}
							ref={checkboxRef}
						/>
					</div>
				)}
				<div>
					<strong className="font-medium text-gray-900">{todo.title}</strong>
					<p className="mt-1 text-pretty text-sm text-gray-700">{todo.description}</p>
				</div>
				<div className="ms-auto">
					<p className="text-pretty text-right text-sm text-gray-700">
						Fälligkeit: <br />
						{new Date(todo.dueDate).toLocaleDateString()}
					</p>

					<div className="text-end">
						<TodoItemPriority priorityLevel={todo.priority!} />
					</div>
				</div>
			</div>
		</div>
	);
};
