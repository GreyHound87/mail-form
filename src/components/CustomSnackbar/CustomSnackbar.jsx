import React from 'react';
import { Snackbar, Alert } from '@mui/material';

export function CustomSnackbar({ open, message, severity, onClose }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={{
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
            }}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}
