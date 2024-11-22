import { ButtonType } from "./form.types";
import { Todo } from "./todo.types";

export interface ButtonLinkProps {
  href: string;
  label: string;
}

export interface ButtonProps {
  type: ButtonType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  disabled?: boolean;
}

export interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

export interface TodoItemProps {
  todo: Todo;
}

export interface TodoListProps {
  completed: boolean;
}
