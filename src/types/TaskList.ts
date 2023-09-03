import { TaskFormData } from "./TaskForm.ts";

export interface TaskListProps {
    tasks: TaskFormData[];
    onEditTask: (task: TaskFormData) => void;
    onDeleteTask: (id?: number) => void;
}