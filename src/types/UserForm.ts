import React from "react";

export type FormData = {
    email: string,
    password: string;
}

export interface UserFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    onSubmit: () => void;
    title: string;
}