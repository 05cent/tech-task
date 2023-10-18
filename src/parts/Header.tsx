import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { onLogout } from '../store/slices/userAuthStore.ts';

import styles from './Header.module.css';

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(onLogout());
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <Button onClick={handleLogout} variant="contained" color="inherit">Logout</Button>
        </header>
    );
};

export default Header;