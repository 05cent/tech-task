import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const Task = () => {
    const { id } = useParams();

    return (
            <Typography variant="h2">Task N{id}</Typography>
    );
};

export default Task;