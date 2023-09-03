export type TaskModel = {
    id: number;
    title: string;
    desc: string;
    date: string;
    status: string;
};

export interface TaskFormProps {
    onSubmit: (formData: TaskModel) => void;
    editModel: TaskModel | null;
}