import { Outlet } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { ToastWrapper } from '../components/ToastWrapper';

export const Layout = () => {
	return (
		<div className="flex h-screen flex-col justify-between">
			<Outlet />
			<ToastWrapper />
			<Nav />
		</div>
	);
};
