import React from 'react';
import { useTodoStore } from '../store/hooks/useTodoStore';
import { HeaderProps } from '../types/props.types';
import { SearchBar } from './Searchbar';

export const Header: React.FC<HeaderProps> = ({ title, showSearch = false }) => {
	const { getSelectedCount, completeSelectedTodos } = useTodoStore();

	return (
		<header className="sticky top-0 w-full border-b border-gray-200 bg-gray-50 z-30">
			<div className="mx-auto max-w-screen-xl px-3 py-6 sm:px-6 sm:py-6 lg:px-8">
				<div className="flex justify-between gap-4 md:flex-row md:items-center md:justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
					</div>
					{title === 'Offene Aufgaben' && getSelectedCount() > 0 && (
						<div>
							<button
								className="text-center bg-blue-700 font-medium focus-within:ring-4 focus-within:outline-none inline-flex items-center justify-center px-3 py-2 text-xs text-white bg-primary-700 hover:bg-primary-800 rounded-lg"
								onClick={completeSelectedTodos}
							>
								<span className="flex-shrink-0 rounded-full w-3.5 h-3.5 inline-flex items-center justify-center me-2 text-blue-500 bg-white text-xs font-semibold text-primary-800">
									{getSelectedCount()}
								</span>
								Abschließen
							</button>
						</div>
					)}
				</div>
			</div>
			{showSearch && <SearchBar />}
		</header>
	);
};
