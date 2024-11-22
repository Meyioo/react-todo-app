import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";

export const Home = () => {
  return (
    <div>
      <Header title="Offene Aufgaben" showSearch={true} />
      <TodoList completed={false} />
    </div>
  );
};
