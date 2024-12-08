import { Button, Datepicker, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Priority from '../components/Priority';
import { PriorityLevel } from '../constants/priority.constants';
import { useTodoStore } from '../store/hooks/useTodoStore';
import { ITodo } from '../types/todo.types';

export const CreateTodo = () => {
	const navigate = useNavigate();
	const { addTodo } = useTodoStore();
	const [todo, setTodo] = useState<ITodo>({
		id: null,
		title: '',
		description: '',
		completed: false,
		selected: false,
		createDate: new Date(),
		dueDate: new Date(),
		priority: PriorityLevel.Low
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setTodo((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleDateChange = (date: Date | null) => {
		if (!date) return;

		setTodo((prev) => ({
			...prev,
			dueDate: date
		}));
	};

	const handleSubmit = () => {
		addTodo(todo);
	};

	return (
		<div>
			<Header title="Aufgabe anlegen" />
			<div className="container mx-auto">
				{todo.dueDate.toDateString()}
				<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
					<form className="flex max-w-md flex-col gap-4">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="title" value="Titel" />
							</div>
							<TextInput
								id="title"
								type="text"
								name="title"
								placeholder="Titel eingeben"
								value={todo.title}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="description" value="Beschreibung" />
							</div>
							<TextInput
								id="description"
								type="text"
								name="description"
								placeholder="Beschreibung eingeben"
								value={todo.description}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="dueDate" value="Fälligkeitsdatum" />
							</div>
							<Datepicker
								language="de-DE"
								name="dueDate"
								value={todo.dueDate}
								onChange={handleDateChange}
								required
							/>
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="priority" value="Priorität" />
							</div>
							<Priority initialPriority={PriorityLevel.Low} />
						</div>
						<Button type="submit" onClick={handleSubmit}>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};
