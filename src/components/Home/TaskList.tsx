import { Box, Button, ListItem, ListItemText, Typography } from '@mui/material';
import { TaskListProps } from '../../types/TaskList.ts';
import TaskDeleteButton from './TaskDeleteButton.tsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/Store.ts';

import styles from './TaskList.module.css';

const TaskList = ({ tasks, onEditTask, onDeleteTask }: TaskListProps) => {
    const { filteredTasks, searchValue } = useSelector((state: RootState) => state.tasks);

    return (
        <Box className={styles.listContent}>
            {
                !tasks.length
                    ? <Typography paragraph fontWeight={700}>Empty data</Typography>
                    : (searchValue ? filteredTasks : tasks).map(task =>
                        <ListItem key={task.id}>
                            <Link to={`/tasks/${task.id}`}>
                                <ListItemText
                                    primary={task.title}
                                    secondary={`Description: ${task.desc}, Date: ${task.date}, Status: ${task.status}`}
                                    className={styles.listItem}
                                />
                            </Link>
                            <Button variant="outlined"
                                    color="info"
                                    onClick={() => onEditTask(task)}>Edit</Button>
                            <TaskDeleteButton onDelete={() => onDeleteTask(task.id)} />
                        </ListItem>
                    )
            }
        </Box>
    );
};
export default TaskList;