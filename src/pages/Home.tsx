import { useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import { TaskActions, TaskForm, TaskList } from "../components/Home";
import { TaskFormData } from "../types/TaskForm.ts";

import styles from './Home.module.css';

const Home = () => {
    const [tasks, setTasks] = useState<TaskFormData[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<TaskFormData[] | null>(null);
    const [open, setOpen] = useState(false);
    const [editModel, setEditModel] = useState<TaskFormData | null>(null);

    const addOrUpdateTask = (formData: TaskFormData) => {
        const id = formData.id;
        id ? updateTask(formData) : addTask(formData);
        setOpen(false);
    };

    const addTask = (formData: TaskFormData) => {
        const newTask: TaskFormData = { ...formData, id: (tasks.length && Math.max(...tasks.map(i => i.id)) + 1) || 1 };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (formData: TaskFormData) => {
        const indexToEdit = tasks.findIndex(item => item.id === formData.id);
        const updatedTasks = [...tasks];
        updatedTasks[indexToEdit] = { ...formData };
        setTasks(updatedTasks);
        setEditModel(null);
    };

    const handleInputChange = (e: { target: { value: string; }; }) => {
        const { value } = e.target;
        setFilteredTasks(value === '' ? null : tasks.filter((task => task.title.includes(value) || task.date.includes(value))));
    };

    const onEditTask = (task: TaskFormData) => {
        setOpen(true);
        setEditModel(task);
    };

    const onModalClose = () => {
        setOpen(false);
        setEditModel(null);
    };

    const onDeleteTask = (id?: number) => {
        if (!tasks.length) return;
        setTasks(id ? tasks.filter(task => task.id !== id) : []);
    };

    return (
        <Grid container justifyContent="center" flexDirection="column" alignItems="center">
            <Modal
                open={open}
                onClose={onModalClose}
            >
                <Box className={styles.modal}>
                    <TaskForm onSubmit={addOrUpdateTask} editModel={editModel} />
                </Box>
            </Modal>
            <TaskActions onAddTask={setOpen} onSearch={handleInputChange} onClear={onDeleteTask} />
            <TaskList tasks={filteredTasks || tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        </Grid>
    );
};

export default Home;