import { TaskModel } from './Task.ts';

export interface TaskListProps {
    tasks: TaskModel[];
    onEditTask: (task: TaskModel) => void;
    onDeleteTask: (id: number) => void;
}