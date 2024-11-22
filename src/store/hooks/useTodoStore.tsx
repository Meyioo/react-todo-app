import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const useTodoStore = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodoStore must be used within a TodoProvider");
  }
  return context;
};
