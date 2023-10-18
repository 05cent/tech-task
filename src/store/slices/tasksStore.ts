import { createSlice } from '@reduxjs/toolkit';
import { Tasks } from '../../types/TasksStore.ts';
import { TaskModel } from '../../types/Task.ts';

const initialState: Tasks = {
    tasks: [],
    filteredTasks: [],
    editModel: null,
    searchValue: ''
};

const pickByPredicate = (searchValue: string, tasks: TaskModel[]) => searchValue ? tasks.filter(t => t.title.includes(searchValue) || t.date.includes(searchValue)) : [];

const tasksStore = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask(state, action) {
            const newTask = {
                ...action.payload,
                id: (state.tasks.length && Math.max(...state.tasks.map(t => t.id))) + 1
            };
            state.tasks = [...state.tasks, newTask];
            state.filteredTasks = pickByPredicate(state.searchValue, state.tasks);
        },
        changeTask(state, action) {
            const { id } = action.payload;
            state.tasks = state.tasks.map(t => t.id === id ? { ...action.payload } : t);
            state.filteredTasks = pickByPredicate(state.searchValue, state.tasks);
            state.editModel = null;
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
            state.filteredTasks = pickByPredicate(state.searchValue, state.tasks);
        },
        resetTasks(state) {
            state.tasks = [];
            state.filteredTasks = [];
        },
        setEditModel(state, action) {
            state.editModel = action.payload;
        },
        setSearchValue(state, action) {
            const searchValue = action.payload.trim();
            state.searchValue = searchValue;
            state.filteredTasks = pickByPredicate(searchValue, state.tasks);
        }
    }
});

export const {
                 createTask, setSearchValue, changeTask,
                 removeTask, resetTasks, setEditModel
             } = tasksStore.actions;

export default tasksStore.reducer;