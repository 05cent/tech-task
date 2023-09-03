import { Box, Button, Modal, Typography } from "@mui/material";
import { ConfirmationModalProps } from "../../types/ConfirmationModal.ts";

import styles from './ConfirmatiomModal.module.css';

const ConfirmationModal = ({ open, onClose, onDelete }: ConfirmationModalProps) =>
    <Modal
        open={open}
        onClose={onClose}
    >
        <Box className={styles.modal}>
            <Typography fontSize={24} textAlign="center" marginBottom={3}>Are you sure to delete the task?</Typography>
            <Box className={styles.actions}>
                <Button variant="contained" color="inherit" onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="error" onClick={onDelete}>Delete</Button>
            </Box>
        </Box>
    </Modal>;

export default ConfirmationModal;