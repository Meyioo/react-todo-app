import React, { createContext, useEffect, useState } from 'react';
import { DefaultTodos } from '../constants/todos.constants';
import { ITodo } from '../types/todo.types';

interface TodoContextType {
	todos: ITodo[];
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	addTodo: (todo: ITodo) => void;
	selectTodo: (todo: ITodo) => void;
	sortByDueDate: () => void;
	sortBySelected: () => void;
	sortByCreateDate: () => void;
	sortByPriority: () => void;
	getSelectedCount: () => number;
	completeSelectedTodos: () => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<ITodo[]>(() => {
		const stored = localStorage.getItem('todos');
		return stored ? JSON.parse(stored) : DefaultTodos;
	});
	const [searchTerm, setSearchTerm] = useState('');
	let selectedAscendingOrder = true;
	let dueDateAscendingOrder = true;
	let createDateAscendingOrder = true;
	let priorityAscendingOrder = true;

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (todo: ITodo) => {
		setTodos((prev) => [
			...prev,
			{
				...todo,
				id: prev.length + 1
			}
		]);
	};

	const completeSelectedTodos = () => {
		setTodos((prev) =>
			prev.map((todo) => (todo.selected ? { ...todo, completed: true, selected: false } : todo))
		);
	};

	const selectTodo = (todo: ITodo) => {
		setTodos((prev) => prev.map((t) => (t.id === todo.id ? { ...t, selected: !t.selected } : t)));
	};

	const getSelectedCount = () => todos.filter((todo) => todo.selected).length;

	const sortBySelected = () => {
		setTodos((prev) => {
			const sortedTodos = [...prev].sort((a, b) => {
				let comparison: number;
				if (a.selected === b.selected) {
					comparison = 0;
				} else {
					comparison = a.selected ? -1 : 1;
				}
				return selectedAscendingOrder ? comparison : -comparison;
			});
			selectedAscendingOrder = !selectedAscendingOrder;
			return sortedTodos;
		});
	};

	const sortByDueDate = () => {
		setTodos((prev) => {
			const sortedTodos = [...prev].sort((a, b) => {
				const dateA = new Date(a.dueDate).getTime();
				const dateB = new Date(b.dueDate).getTime();
				return dueDateAscendingOrder ? dateA - dateB : dateB - dateA;
			});
			dueDateAscendingOrder = !dueDateAscendingOrder;
			return sortedTodos;
		});
	};

	const sortByCreateDate = () => {
		setTodos((prev) => {
			const sortedTodos = [...prev].sort((a, b) => {
				const dateA = new Date(a.createDate).getTime();
				const dateB = new Date(b.createDate).getTime();
				return createDateAscendingOrder ? dateA - dateB : dateB - dateA;
			});
			createDateAscendingOrder = !createDateAscendingOrder;
			return sortedTodos;
		});
	};

	const sortByPriority = () => {
		const priorityOrder = { low: 1, medium: 2, high: 3 };
		setTodos((todos) => {
			const sortedTodos = [...todos].sort((a, b) => {
				const comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
				return priorityAscendingOrder ? comparison : -comparison;
			});
			priorityAscendingOrder = !priorityAscendingOrder;
			return sortedTodos;
		});
	};

	const value = {
		todos,
		searchTerm,
		setSearchTerm,
		addTodo,
		selectTodo,
		sortBySelected,
		sortByCreateDate,
		sortByDueDate,
		sortByPriority,
		getSelectedCount,
		completeSelectedTodos
	};

	return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
