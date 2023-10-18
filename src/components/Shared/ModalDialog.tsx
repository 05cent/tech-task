import { Box, Fade, Modal } from '@mui/material';
import { ModalDialogProps } from '../../types/ModalDialog.ts';

import styles from './ModalDialog.module.css';

const ModalDialog = ({ open, onClose, children }: ModalDialogProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <Box className={styles.modal}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export default ModalDialog;