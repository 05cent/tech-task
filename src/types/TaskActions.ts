import { ChangeEvent } from "react";

export interface TaskActionsProps {
    onAddTask: (open: boolean) => void,
    onSearch: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onClear: () => void
}
