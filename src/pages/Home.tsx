import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { TaskActions, TaskForm, TaskList } from '../components/Home';
import { TaskModel } from '../types/Task.ts';
import { RootState } from '../types/Store.ts';
import {
    changeTask,
    createTask,
    removeTask,
    resetTasks,
    setEditModel,
    setSearchValue
} from '../store/slices/tasksStore.ts';
import { ModalDialog } from '../components/Shared/';

const Home = () => {
    const [open, setOpen] = useState(false);

    const { tasks } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch();

    const addOrUpdateTask = (formData: TaskModel) => {
        const { id } = formData;
        dispatch((id ? changeTask : createTask)(formData));
        setOpen(false);
    };

    const handleInputChange = (e: {
        target: {
            value: string;
        };
    }) => {
        const { value } = e.target;
        dispatch(setSearchValue(value));
    };

    const onEditTask = (task: TaskModel) => {
        setOpen(true);
        dispatch(setEditModel(task));
    };

    const onModalClose = () => {
        setOpen(false);
    };

    const clearTasks = () => {
        if (!tasks.length) return;
        dispatch(resetTasks());
    };

    const onDeleteTask = (id: number) => {
        dispatch(removeTask(id));
    };

    useEffect(() => {
        return () => {
            dispatch(setSearchValue(''));
        };
    }, []);

    return (
        <Grid container justifyContent="center" flexDirection="column" alignItems="center">
            <ModalDialog
                open={open}
                onClose={onModalClose}
            >
                <TaskForm onSubmit={addOrUpdateTask} />
            </ModalDialog>
            <TaskActions onAddTask={setOpen} onSearch={handleInputChange} onClear={clearTasks} />
            <TaskList tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
        </Grid>
    );
};

export default Home;