import { PriorityLevel } from "../constants/priority.constants";

export interface ITodo {
  id: number | null;
  createDate: Date;
  title: string;
  description: string;
  completed: boolean;
  selected: boolean;
  dueDate: Date;
  priority: PriorityLevel;
}

export type Priority = {
  level: PriorityLevel;
  label: string;
  color: string;
  activeColor: string;
};
