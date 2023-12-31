﻿import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { TaskActionsProps } from "../../types/TaskActions.ts";
import { DeleteConfirmationModal } from "../Shared";

import styles from './TaskActions.module.css';

const TaskActions = ({ onSearch, onClear, onAddTask }: TaskActionsProps) => {
    const [open, setOpen] = useState(false);

    const onDelete = () => {
        onClear();
        setOpen(false);
    };

    return <Grid container className={styles.container}>
        <Button className={styles.button} onClick={() => onAddTask(true)} variant="contained" color="success">add task</Button>
        <TextField
            label="Search"
            type="search"
            onChange={onSearch}
            className={styles.searchInput}
            size="small"
        />
        <Button className={styles.button} onClick={() => setOpen(true)} variant="contained" color="error">clear tasks</Button>
        <DeleteConfirmationModal open={open} onClose={() => setOpen(false)} onDelete={onDelete} />
    </Grid>;
};

export default TaskActions;