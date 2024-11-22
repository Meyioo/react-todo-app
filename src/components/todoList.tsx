import React from "react";
import { useTodoStore } from "../store/hooks/useTodoStore";
import { TodoListProps } from "../types/props.types";
import { Todo } from "../types/todo.types";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC<TodoListProps> = ({ completed = false }) => {
  const { todos, searchTerm } = useTodoStore();

  const filteredTodos = React.useMemo(() => {
    const todoList = completed ? todos.completed : todos.open;
    if (searchTerm.length === 0) return todoList;

    return todoList.filter(
      (todo: Todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [completed, todos, searchTerm]);

  return (
    <main>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
      {filteredTodos.length === 0 && (
        <p className="mt-3 text-center text-gray-500">
          Keine Aufgaben gefunden
        </p>
      )}
    </main>
  );
};
