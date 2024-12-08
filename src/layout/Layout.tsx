import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav';

export const Layout = () => {
	return (
		<div className="flex h-screen flex-col justify-between">
			<Outlet />
			<Nav />
		</div>
	);
};
