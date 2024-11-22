import React from "react";
import { useTodoStore } from "../store/hooks/useTodoStore";
import { TodoItemProps } from "../types/props.types";

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { selectTodo } = useTodoStore();

  return (
    <div className="flex w-full justify-between border-b-2 p-2 text-left">
      <div className="flex">
        {!todo.completed && (
          <div className="me-4 ms-2 flex items-center">
            <input
              type="checkbox"
              className="size-4  rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
              id="checkbox"
              onClick={() => selectTodo(todo)}
              checked={todo.selected}
            />
          </div>
        )}
        <div>
          <strong className="font-medium text-gray-900">{todo.title}</strong>
          <p className="mt-1 text-pretty text-sm text-gray-700">
            {todo.description}
          </p>
        </div>
      </div>
    </div>
  );
};
