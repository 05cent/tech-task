import { ReactNode } from 'react';

export interface ModalDialogProps {
    open: boolean,
    onClose: () => void,
    children: ReactNode
}