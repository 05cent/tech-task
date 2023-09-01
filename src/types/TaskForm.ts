export type TaskFormData = {
    id: number;
    title: string;
    desc: string;
    date: string;
    status: string
}

export interface TaskFormProps {
    onSubmit: (formData: TaskFormData) => void;
    editModel: TaskFormData | null
}