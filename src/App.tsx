import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./store/TodoContext";

import "./index.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Completed } from "./pages/Completed";
import { CreateTodo } from "./pages/CreateTodo";

function App() {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="abgeschlossen" element={<Completed />} />
            <Route path="todo-anlegen" element={<CreateTodo />} />
          </Route>
        </Routes>
      </Router>
    </TodoProvider>
  );
}

export default App;
