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

	let selectedAscendingOrder = true;

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

	let dueDateAscendingOrder = true;

	const sortByDueDate = () => {
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

	let createDateAscendingOrder = true;

	const sortByCreateDate = () => {
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

	let priorityAscendingOrder = true;

	const sortByPriority = () => {
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
