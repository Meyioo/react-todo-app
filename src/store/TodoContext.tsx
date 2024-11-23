import React, { createContext, useEffect, useState } from "react";
import { Todo } from "../types/todo.types";

interface TodoContextType {
  todos: Todo[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  addTodo: (todo: Todo) => void;
  toggleTodoCompletion: (index: number) => void;
  selectTodo: (todo: Todo) => void;
  closeSelectedTodos: () => void;
}

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Einkaufen gehen",
    description: "Milch, Eier, Brot und Gemüse kaufen",
    completed: false,
    selected: false,
  },
  {
    id: 2,
    title: "Bachelorarbeit schreiben",
    description: "Kapitel über Svelte-Framework fertigstellen",
    completed: false,
    selected: false,
  },
  {
    id: 3,
    title: "Fitnessstudio besuchen",
    description: "1 Stunde Ausdauer und Krafttraining",
    completed: false,
    selected: false,
  },

  {
    id: 4,
    title: "Einkaufen gehen",
    description: "Lebensmittel und Haushaltswaren besorgen",
    completed: false,
    selected: false,
  },
  {
    id: 5,
    title: "Arzttermin wahrnehmen",
    description: "Jährliche Gesundheitsuntersuchung",
    completed: false,
    selected: false,
  },
  {
    id: 6,
    title: "E-Mails bearbeiten",
    description: "Alle wichtigen E-Mails durchgehen und beantworten",
    completed: false,
    selected: false,
  },
  {
    id: 7,
    title: "Projektbericht schreiben",
    description: "Fortschrittsbericht für das aktuelle Projekt erstellen",
    completed: false,
    selected: false,
  },
  {
    id: 8,
    title: "Wohnung putzen",
    description: "Staubsaugen und Oberflächen abwischen",
    completed: false,
    selected: false,
  },
  {
    id: 9,
    title: "Freunde treffen",
    description: "Treffen zum Abendessen vereinbaren",
    completed: false,
    selected: false,
  },
  {
    id: 10,
    title: "Rechnung bezahlen",
    description: "Telefon- und Internetrechnung begleichen",
    completed: false,
    selected: false,
  },
  {
    id: 11,
    title: "Buch lesen",
    description: "Kapitel 4 des aktuellen Buches durchlesen",
    completed: false,
    selected: false,
  },
  {
    id: 12,
    title: "Joggen gehen",
    description: "30 Minuten joggen im Park",
    completed: false,
    selected: false,
  },
  {
    id: 13,
    title: "Familie anrufen",
    description: "Kurzes Gespräch mit den Eltern führen",
    completed: false,
    selected: false,
  },
];

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : defaultTodos;
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [
      ...prev,
      {
        ...todo,
        id: prev.length + 1,
      },
    ]);
  };

  const toggleTodoCompletion = (index: number) => {
    setTodos((prev) => {
      prev[index].completed = !prev[index].completed;
      return { ...prev };
    });
  };

  const selectTodo = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, selected: !t.selected } : t))
    );
  };

  const closeSelectedTodos = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.selected ? { ...todo, completed: true, selected: false } : todo
      )
    );
  };

  const value = {
    todos,
    searchTerm,
    setSearchTerm,
    addTodo,
    toggleTodoCompletion,
    selectTodo,
    closeSelectedTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
