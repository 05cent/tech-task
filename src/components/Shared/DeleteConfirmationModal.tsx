import { Box, Button, Typography } from '@mui/material';
import { DeleteConfirmationModalProps } from '../../types/DeleteConfirmationModal.ts';
import { ModalDialog } from './index.ts';

const DeleteConfirmationModal = ({ open, onClose, onDelete }: DeleteConfirmationModalProps) =>
    <ModalDialog
        open={open}
        onClose={onClose}
    >
        <Typography fontSize={24} textAlign="center" marginBottom={3}>Are you sure to
            delete?</Typography>
        <Box display="flex" justifyContent="space-evenly">
            <Button variant="contained" color="inherit" onClick={onClose}>Cancel</Button>
            <Button variant="contained" color="error" onClick={onDelete}>Delete</Button>
        </Box>
    </ModalDialog>;

export default DeleteConfirmationModal;