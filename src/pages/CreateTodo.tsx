import { useState } from 'react';
import { Header } from '../components/Header';
import Priority from '../components/Priority';
import { PriorityLevel } from '../constants/priority.constants';
import { useToast } from '../store/hooks/useToastStore';
import { useTodoStore } from '../store/hooks/useTodoStore';
import { ITodo } from '../types/todo.types';

export const CreateTodo = () => {
	const { addTodo } = useTodoStore();
	const { showToast } = useToast();
	const [todo, setTodo] = useState<ITodo>({
		id: null,
		title: '',
		description: '',
		completed: false,
		selected: false,
		createDate: new Date(),
		dueDate: new Date(),
		priority: null
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTodo((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = new Date(e.target.value);
		setTodo((prev) => ({
			...prev,
			dueDate: date
		}));
	};

	const handlePriorityChange = (priority: PriorityLevel) => {
		setTodo((prev) => ({
			...prev,
			priority
		}));
	};

	function isFormValid() {
		return !todo.title || !todo.description || !todo.dueDate || !todo.priority;
	}

	const handleSubmit = () => {
		addTodo(todo);
		showToast({
			message: 'Aufgabe wurde erfolgreich angelegt',
			color: 'bg-green-500',
			duration: 3000
		});
	};

	return (
		<div>
			<Header title="Aufgabe anlegen"></Header>
			<form>
				<div className="grid mx-4 gap-6 m-6 md:grid-cols-2">
					<div>
						<label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
							Titel
						</label>
						<input
							type="text"
							id="title"
							name="title"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Titel eingeben"
							value={todo.title}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="Beschreibung" className="block mb-2 text-sm font-medium text-gray-900">
							Beschreibung
						</label>
						<input
							type="text"
							id="Beschreibung"
							name="description"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Beschreibung eingeben"
							value={todo.description}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900">
							Fälligkeitsdatum
						</label>
						<input
							type="date"
							id="dueDate"
							value={todo.dueDate.toISOString().split('T')[0]}
							onChange={handleDateChange}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							required
						/>
					</div>
					<div>
						<label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900">
							Priorität
						</label>
						<Priority onValueChange={handlePriorityChange} />
					</div>
				</div>

				<button
					type="button"
					onClick={handleSubmit}
					disabled={isFormValid()}
					className="text-white disabled:bg-blue-500 bg-blue-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
				>
					Aufgabe anlegen
				</button>
			</form>
		</div>
	);
};
