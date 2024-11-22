import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useTodoStore } from "../store/hooks/useTodoStore";
import { FormField } from "../types/form.types";
import { Todo } from "../types/todo.types";

export const CreateTodo = () => {
  const navigate = useNavigate();
  const { addTodo } = useTodoStore();
  const [todo, setTodo] = useState<Todo>({
    title: "",
    description: "",
    completed: false,
    selected: false,
  });

  const fields: FormField<keyof Todo>[] = [
    { name: "title", placeholder: "Titel eingeben", type: "text" },
    {
      name: "description",
      placeholder: "Beschreibung hinzufügen ",
      type: "text",
    },
  ];

  const handleSubmit = () => {
    addTodo(todo);
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header title="Aufgabe anlegen" />
      <div className="container mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <form className="mx-auto mt-4 max-w-md space-y-4">
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="sr-only">
                  {field.placeholder}
                </label>
                <div className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={field.placeholder}
                    value={todo[field.name] as string}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <Button
                label="Aufgabe anlegen"
                type="button"
                disabled={!todo.title || !todo.description}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
