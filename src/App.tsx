import { HashRouter, Route, Routes } from 'react-router-dom';
import { TodoProvider } from './store/TodoContext';

import './index.css';
import { Layout } from './layout/Layout';
import { Completed } from './pages/Completed';
import { CreateTodo } from './pages/CreateTodo';
import { Home } from './pages/Home';
import { ToastProvider } from './store/ToastContext';

function App() {
	return (
		<TodoProvider>
			<ToastProvider>
				<HashRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="abgeschlossen" element={<Completed />} />
							<Route path="anlegen" element={<CreateTodo />} />
						</Route>
					</Routes>
				</HashRouter>
			</ToastProvider>
		</TodoProvider>
	);
}

export default App;
