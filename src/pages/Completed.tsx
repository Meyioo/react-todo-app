import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";

export const Completed = () => {
  return (
    <div>
      <Header title="Abgeschlossene Aufgaben" />
      <TodoList completed={true} />
    </div>
  );
};
