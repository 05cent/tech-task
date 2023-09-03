import { TaskModel } from "./TaskForm.ts";

export interface TaskListProps {
    tasks: TaskModel[];
    onEditTask: (task: TaskModel) => void;
    onDeleteTask: (id?: number) => void;
}