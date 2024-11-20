import { useContext } from "react";
import { TodosContext } from "../context/todo.context";
import TodoItem from "./todoItem";

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  return (
    <main>
      {todos.forEach((todo) => {
        <TodoItem {todo}></TodoItem>;
      })}

      <p className="mt-3 text-center text-gray-500">Keine Aufgaben gefunden</p>
    </main>
  );
}
