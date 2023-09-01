import React, { useState } from 'react';
import UserForm from "../components/Shared/UserForm.tsx";
import { Alert, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormData } from "../types/UserForm.ts";
import { AlertModel } from "../types/AlertModels.ts";

import styles from './Register.module.css';

const Register = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [registerAlert, setRegisterAlert] = useState<AlertModel>({
        isAlert: false,
        severity: undefined,
        message: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password.length < 8) {
            setRegisterAlert({ isAlert: true, severity: 'warning', message: 'Password should be at least 8 characters long.' });
            return;
        }

        if (localStorage.getItem(formData.email)) {
            setRegisterAlert({ isAlert: true, severity: 'warning', message: 'This email is already used. Please try with another one.' });
            return;
        }

        localStorage.setItem(formData.email, JSON.stringify(formData));
        navigate('/login');
    };

    return (
        <Box className={styles.container}>
            <UserForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} title="Register" />
            {registerAlert.isAlert &&
                <Alert severity={registerAlert.severity}>{registerAlert.message}</Alert>
            }
        </Box>
    );
};

export default Register;