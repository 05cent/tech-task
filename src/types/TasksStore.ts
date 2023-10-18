import { TaskModel } from './Task.ts';

export type Tasks = {
    tasks: TaskModel[];
    filteredTasks: TaskModel[];
    editModel: TaskModel | null;
    searchValue: string
}