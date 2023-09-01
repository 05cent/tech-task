import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, Box } from "@mui/material";
import { onLoginSuccess } from "../store/slices/userAuth.ts";
import { FormData } from "../types/UserForm.ts";
import { UserForm } from "../components/Shared";
import { AlertModel } from "../types/AlertModels.ts";

import styles from './Login.module.css';

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [loginAlert, setLoginAlert] = useState<AlertModel>({
        isAlert: false,
        severity: undefined,
        message: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem(formData.email) as string);
        if (!userData || userData.email !== formData.email || userData.password !== formData.password) {
            setLoginAlert({ isAlert: true, severity: 'error', message: 'Wrong email or password.' });
            return;
        }

        localStorage.setItem('loggedInUser', JSON.stringify({ ...formData }));
        dispatch(onLoginSuccess(formData));
        navigate('/home');
    };

    return (
        <Box className={styles.container}>
            <UserForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} title="Login" />
            {loginAlert.isAlert &&
                <Alert severity={loginAlert.severity}>{loginAlert.message}</Alert>
            }
        </Box>
    );
};

export default Login;