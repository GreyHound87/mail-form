import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from '@mui/material';

export function Modal({ isOpen, onClose, onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        onSubmit(email);
    };

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Send Form Data</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <Typography variant="subtitle2">Enter the email to send the form data to:</Typography>
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        variant="outlined"
                    />
                    <DialogActions>
                        <Button type="submit" color="primary" variant="contained" size="large">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
}
