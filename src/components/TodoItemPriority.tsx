import React from 'react';
import { Priorities, PriorityLevel } from '../constants/priority.constants';

interface TodoItemPriorityProps {
	priorityLevel?: PriorityLevel;
}

export const TodoItemPriority: React.FC<TodoItemPriorityProps> = ({
	priorityLevel = PriorityLevel.Low
}) => {
	const priority = Priorities[priorityLevel];

	return (
		<button
			type="button"
			className={`center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-2 py-1 font-sans text-xs font-bold leading-none last-of-type:me-0 ${priority.color}`}
		>
			<div className="mt-px text-white">{priority.label}</div>
		</button>
	);
};

export default TodoItemPriority;
