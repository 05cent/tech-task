import { useRef, useState } from "react";
import { Box, Button, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { TaskListProps } from "../../types/TaskList.ts";

import styles from './TaskList.module.css';

const TaskList = ({ tasks, onEditTask, onDeleteTask }: TaskListProps) => {
    const [open, setOpen] = useState(false);
    const taskIdRef = useRef<number>();

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
                        taskIdRef.current = task.id
                    }}>Delete</Button>
                </ListItem>
            ))}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box className={styles.modal}>
                    <Typography fontSize={24} textAlign="center" marginBottom={3}>Are you sure to delete the task?</Typography>
                    <Box className={styles.actions}>
                        <Button variant="contained" color="inherit" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button variant="contained" color="error" onClick={() => {
                            onDeleteTask(taskIdRef.current as number);
                            setOpen(false);
                        }}>Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default TaskList;