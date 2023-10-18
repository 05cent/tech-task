import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onLoginSuccess } from './store/slices/userAuthStore.ts';
import { RootState } from './types/Store.ts';
import { Home, Login, Register, Task } from './pages';
import { Header } from './parts';

import './app.css';

function App() {
    const user = useSelector((state: RootState) => state.userAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('loggedInUser') as string);
        if (userData) dispatch(onLoginSuccess(userData));
    }, []);

    const renderPages = () =>
        user.userData ? <>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/tasks/:id" element={<Task />} />
                <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>
        </> : <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/login" replace />} />
        </Routes>;

    return <BrowserRouter>
        {renderPages()}
    </BrowserRouter>;
}

export default App;
