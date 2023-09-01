import { AlertColor } from "@mui/material";

export type AlertModel = {
    isAlert: boolean,
    severity: undefined | AlertColor,
    message: string
};