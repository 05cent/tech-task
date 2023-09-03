import { Link } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { UserFormProps } from '../../types/UserForm.ts';

import styles from "./UserForm.module.css";

const UserForm = ({ formData, setFormData, onSubmit, title }: UserFormProps) => {
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
            <Typography variant="h3" color="Highlight" fontFamily="monospace">{title}</Typography>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    fullWidth
                    margin="normal"
                />
                {title === 'Login' &&
                    <Box className={styles.signUp}>
                        <Typography fontSize={22} fontWeight={700}>Don't have an account?</Typography>
                        <Link to="/register">Sign Up</Link>
                    </Box>
                }
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    {title}
                </Button>
            </form>
        </Container>
    );
};

export default UserForm;