import React, { createContext, useState, useEffect } from "react";
import { Todo } from "../types/todo.types";

interface TodoStore {
  open: Todo[];
  completed: Todo[];
}

interface TodoContextType {
  todos: TodoStore;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addTodo: (todo: Todo) => void;
  toggleTodoCompletion: (index: number) => void;
  removeTodo: (index: number) => void;
  selectTodo: (todo: Todo) => void;
  closeSelectedTodos: () => void;
}

const defaultTodos: TodoStore = {
  open: [
    {
      title: "Einkaufen gehen",
      description: "Milch, Eier, Brot und Gemüse kaufen",
      completed: false,
      selected: false,
    },
    // ... add other default todos
  ],
  completed: [],
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<TodoStore>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : defaultTodos;
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => ({
      ...prev,
      open: [...prev.open, todo],
    }));
  };

  const toggleTodoCompletion = (index: number) => {
    setTodos((prev) => {
      const updatedOpen = [...prev.open];
      updatedOpen[index].completed = !updatedOpen[index].completed;
      return { ...prev, open: updatedOpen };
    });
  };

  const removeTodo = (index: number) => {
    setTodos((prev) => ({
      ...prev,
      open: prev.open.filter((_, i) => i !== index),
    }));
  };

  const selectTodo = (todo: Todo) => {
    setTodos((prev) => ({
      ...prev,
      open: prev.open.map((t) =>
        t === todo ? { ...t, selected: !t.selected } : t
      ),
    }));
  };

  const closeSelectedTodos = () => {
    setTodos((prev) => {
      const selectedTodos = prev.open.filter((todo) => todo.selected);
      const completedTodos = selectedTodos.map((todo) => ({
        ...todo,
        completed: true,
      }));

      return {
        completed: [...prev.completed, ...completedTodos],
        open: prev.open.filter((todo) => !todo.selected),
      };
    });
  };

  const value = {
    todos,
    searchTerm,
    setSearchTerm,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    selectTodo,
    closeSelectedTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
