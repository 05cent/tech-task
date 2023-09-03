import { Box, Button, Modal, Typography } from "@mui/material";
import { DeleteConfirmationModalProps } from "../../types/DeleteConfirmationModal.ts";

import styles from './DeleteConfirmationModal.module.css';

const DeleteConfirmationModal = ({ open, onClose, onDelete }: DeleteConfirmationModalProps) => <Modal
    open={open}
    onClose={onClose}
>
    <Box className={styles.modal}>
        <Typography fontSize={24} textAlign="center" marginBottom={3}>Are you sure to delete?</Typography>
        <Box className={styles.actions}>
            <Button variant="contained" color="inherit" onClick={onClose}>Cancel</Button>
            <Button variant="contained" color="error" onClick={onDelete}>Delete</Button>
        </Box>
    </Box>
</Modal>;

export default DeleteConfirmationModal;