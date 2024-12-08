import { useState } from 'react';
import { Priorities } from '../constants/priority.constants';

const Priority = ({ initialPriority }) => {
	const [priority, setPriority] = useState(initialPriority);

	const selectPriority = (p) => {
		setPriority(p);
	};

	return (
		<div>
			{Object.values(Priorities).map(({ level, label, color, activeColor }) => (
				<button
					key={level}
					type="button"
					className={`center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs font-bold uppercase leading-none text-white last-of-type:me-0 ${color} ${priority === level ? activeColor : ''}`}
					onClick={() => selectPriority(level)}
				>
					<div className="mt-px">{label}</div>
				</button>
			))}
		</div>
	);
};

export default Priority;
