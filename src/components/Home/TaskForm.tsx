import { useState } from "react";
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';
import { TaskFormData, TaskFormProps } from "../../types/TaskForm.ts";

import styles from "./TaskForm.module.css";

const TaskForm = ({ onSubmit, editModel }: TaskFormProps) => {
    const [formData, setFormData] = useState<TaskFormData>(editModel || {
        id: 0,
        title: '',
        desc: '',
        date: '',
        status: ''
    });

    const handleChange = (e: {
        target: {
            name: string;
            value: string;
        };
    }) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h3" color="Highlight" fontFamily="monospace">{formData?.id ? 'Edit Task' : 'Add Task'}</Typography>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(formData);
            }}>
                <TextField
                    label="Title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="desc"
                    type="text"
                    value={formData.desc}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    select
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    fullWidth
                    className={styles.select}
                >
                    <MenuItem value="To Do">To Do</MenuItem>
                    <MenuItem value="In progress">In progress</MenuItem>
                    <MenuItem value="Done">Done</MenuItem>
                </TextField>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Save
                </Button>
            </form>
        </Container>
    );
};

export default TaskForm;