import { Button, Grid, TextField } from "@mui/material";
import { TaskActionsProps } from "../../types/TaskActions.ts";

import styles from './TaskActions.module.css';

const TaskActions = ({ onSearch, onClear, onAddTask }: TaskActionsProps) =>
    <Grid container className={styles.container}>
        <Button className={styles.button} onClick={() => onAddTask(true)} variant="contained" color="success">add task</Button>
        <TextField
            label="Search"
            type="search"
            onChange={onSearch}
            className={styles.input}
            size="small"
        />
        <Button className={styles.button} onClick={onClear} variant="contained" color="error">clear tasks</Button>
    </Grid>;

export default TaskActions;