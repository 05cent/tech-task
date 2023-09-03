import { useRef, useState } from "react";
import { Box, Button, ListItem, ListItemText, Typography } from "@mui/material";
import { TaskListProps } from "../../types/TaskList.ts";

import styles from './TaskList.module.css';
import ConfirmationModal from "../Shared/ConfirmationModal.tsx";

const TaskList = ({ tasks, onEditTask, onDeleteTask }: TaskListProps) => {
    const [open, setOpen] = useState(false);
    const taskIdRef = useRef<number>();

    const onDelete = () => {
        onDeleteTask(taskIdRef.current);
        setOpen(false);
    };

    return (
        <Box className={styles.listContent}>
            {!tasks.length ? <Typography paragraph fontWeight={700}>Empty data</Typography> : tasks.map((task) => (
                <ListItem key={task.id} className={styles.li}>
                    <ListItemText
                        primary={task.title}
                        secondary={`Description: ${task.desc}, Date: ${task.date}, Status: ${task.status}`}
                        className={styles.listItem}
                    />
                    <Button variant="outlined" color="info" onClick={() => onEditTask(task)}>Edit</Button>
                    <Button variant="contained" color="error" onClick={() => {
                        setOpen(true);
                        taskIdRef.current = task.id;
                    }}>Delete</Button>
                </ListItem>
            ))}
            <ConfirmationModal open={open} onClose={() => setOpen(false)} onDelete={onDelete} />
        </Box>
    );
};

export default TaskList;