import React, { useState } from 'react';
import { useTodoStore } from '../store/hooks/useTodoStore';

export const SearchBar: React.FC = () => {
	const {
		searchTerm,
		setSearchTerm,
		sortBySelected,
		sortByPriority,
		sortByCreateDate,
		sortByDueDate
	} = useTodoStore();

	const [dropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};

	return (
		<form className="flex items-center mx-3 gap-2">
			<div className="relative w-full">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						className="w-5 h-5 text-gray-800"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeWidth="2"
							d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="text"
					id="search"
					placeholder="Suche nach..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					style={{ paddingLeft: '2rem' }}
					className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
					required
				/>
			</div>
			<button
				id="dropdownDefaultButton"
				data-dropdown-toggle="dropdown"
				className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
				type="button"
				onClick={toggleDropdown}
			>
				<svg
					className="w-5 h-5 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeWidth="2"
						d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
					/>
				</svg>
			</button>
			<div
				id="dropdown"
				style={{ position: 'absolute', top: '160px', right: 0 }}
				className={`z-10 ${dropdownVisible ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
			>
				<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
					<li>
						<button
							type="button"
							className="block px-4 py-2 hover:bg-gray-100"
							onClick={sortByPriority}
						>
							Priorität
						</button>
					</li>
					<li>
						<button
							type="button"
							className="block px-4 py-2 hover:bg-gray-100"
							onClick={sortByDueDate}
						>
							Fälligkeitsdatum
						</button>
					</li>
					<li>
						<button
							type="button"
							className="block px-4 py-2 hover:bg-gray-100"
							onClick={sortByCreateDate}
						>
							Erstellungsdatum
						</button>
					</li>
					<li>
						<button
							type="button"
							className="block px-4 py-2 hover:bg-gray-100"
							onClick={sortBySelected}
						>
							Auswahl
						</button>
					</li>
				</ul>
			</div>
		</form>
	);
};
