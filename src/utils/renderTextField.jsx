import React from 'react';
import { TextField } from '@mui/material';

export function renderTextField({ input, label, meta: { touched, error }, ...custom }) {
    return (
        <TextField
            label={label}
            error={touched && !!error}
            helperText={touched && error}
            {...input}
            {...custom}
            fullWidth
            margin="normal"
            variant="outlined"
            name={input.name}
        />
    );
}
