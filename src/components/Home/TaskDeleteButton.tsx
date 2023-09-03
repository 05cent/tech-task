import { useState } from "react";
import { Button } from "@mui/material";
import { TaskDeleteButtonProps } from "../../types/DeleteButton.ts";
import { DeleteConfirmationModal } from "../Shared";

const TaskDeleteButton = ({ onDelete }: TaskDeleteButtonProps) => {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    };

    return <>
        <Button variant="contained" color="error" onClick={() => setOpen(true)}>Delete</Button>
        <DeleteConfirmationModal open={open} onClose={onClose} onDelete={onDelete} />
    </>;
};

export default TaskDeleteButton;