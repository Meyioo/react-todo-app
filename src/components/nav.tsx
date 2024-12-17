import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div className="sticky w-full z-50 border-gray-200  bottom-0 start-0 h-16 bg-white border-t">
			<div className="font-medium grid max-w-lg mx-auto grid-cols-3 h-16">
				<Link
					to="/"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
				>
					<svg
						className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
					</svg>
					<span className="text-sm text-gray-500 group-hover:text-blue-600">Offen</span>
				</Link>
				<Link
					to="abgeschlossen"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
				>
					<svg
						className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fillRule="evenodd"
							d="M9 2a1 1 0 0 0-1 1H6a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2a1 1 0 0 0-1-1H9Zm1 2h4v2h1a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h1V4Zm5.707 8.707a1 1 0 0 0-1.414-1.414L11 14.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
							clipRule="evenodd"
						/>
					</svg>

					<span className="text-sm text-gray-500 group-hover:text-blue-600">Abgeschlossen</span>
				</Link>
				<Link
					to="/anlegen"
					className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
				>
					<svg
						className="w-6 h-6 text-gray-500 group-hover:text-blue-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fillRule="evenodd"
							d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
							clipRule="evenodd"
						/>
					</svg>

					<span className="text-sm text-gray-500 group-hover:text-blue-600">Anlegen</span>
				</Link>
			</div>
		</div>
	);
};
