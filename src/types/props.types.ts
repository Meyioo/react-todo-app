import { ButtonType } from './form.types';
import { ITodo } from './todo.types';

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
	todo: ITodo;
}

export interface TodoListProps {
	completed: boolean;
}
