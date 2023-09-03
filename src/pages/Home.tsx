import { useRef, useState } from "react";
import { Box, Grid, Modal } from "@mui/material";
import { TaskActions, TaskForm, TaskList } from "../components/Home";
import { TaskModel } from "../types/TaskForm.ts";

import styles from './Home.module.css';

const Home = () => {
    const tasks = useRef<TaskModel[]>([]);
    const searchValueRef = useRef('');

    const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>([]);
    const [open, setOpen] = useState(false);
    const [editModel, setEditModel] = useState<TaskModel | null>(null);

    const addOrUpdateTask = (formData: TaskModel) => {
        const id = formData.id;
        id ? updateTask(formData) : addTask(formData);
        setOpen(false);
    };

    const searchIfNeed = () => {
        setFilteredTasks(tasks.current.filter(t => searchValueRef.current.trim() === ''
            || t.title.includes(searchValueRef.current)
            || t.date.includes(searchValueRef.current)));
    };

    const addTask = (formData: TaskModel) => {
        const newTask: TaskModel = { ...formData, id: (tasks.current.length && Math.max(...tasks.current.map(i => i.id))) + 1 };
        tasks.current.push(newTask);
        searchIfNeed();
    };

    const updateTask = (formData: TaskModel) => {
        tasks.current = tasks.current.map(t => t.id === formData.id ? { ...formData } : t);
        searchIfNeed();
        setEditModel(null);
    };

    const handleInputChange = (e: { target: { value: string; }; }) => {
        const { value } = e.target;
        searchValueRef.current = value;
        searchIfNeed();
    };

    const onEditTask = (task: TaskModel) => {
        setOpen(true);
        setEditModel(task);
    };

    const onModalClose = () => {
        setOpen(false);
        setEditModel(null);
    };

    const clearTasks = () => {
        if (!tasks.current.length) return;
        tasks.current = [];
        setFilteredTasks([]);
    };

    const onDeleteTask = (id?: number) => {
        tasks.current = tasks.current.filter(t => t.id !== id);
        searchIfNeed();
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
            <TaskActions onAddTask={setOpen} onSearch={handleInputChange} onClear={clearTasks} />
            <TaskList tasks={filteredTasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        </Grid>
    );
};

export default Home;