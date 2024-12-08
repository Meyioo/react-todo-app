import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderProps } from '../types/props.types';
import { SearchBar } from './Searchbar';

export const Header: React.FC<HeaderProps> = ({ title, showSearch = false }) => (
	<header className="sticky top-0 w-full border-b border-gray-200 bg-gray-50">
		<div className="mx-auto max-w-screen-xl px-3 py-8 sm:px-6 sm:py-6 lg:px-8">
			<div className="flex justify-between gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
				</div>
				<div className="flex items-center gap-4">
					<Link to="todo-anlegen">
						<button
							className="inline-block w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
							type="button"
						>
							Neu
						</button>
					</Link>
				</div>
			</div>
		</div>
		{showSearch && <SearchBar />}
	</header>
);
