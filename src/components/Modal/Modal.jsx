import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Typography } from '@mui/material';
import { Form } from 'react-final-form';
import emailjs from '@emailjs/browser';
import { DateTime } from 'luxon';
import { debounce } from 'lodash';
import { LabeledField } from '../LabeledField';
import { SubmitButton } from '../SubmitButton';
import { CustomSnackbar } from '../CustomSnackbar';
import { validateEmail } from '../../utils/validators';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../constants/configID';

function Modal({ isOpen, onClose }) {
    const formData = useSelector((state) => state.form.values);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const handleSubmit = debounce((values) => {
        setIsSubmitting(true);

        const emailTo = values.email;

        const formattedDate = DateTime.now().setLocale('ru').toFormat('dd/MM/yyyy HH:mm');
        const emailData = {
            ...formData,
            emailTo,
            send_time: formattedDate,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID).then(
            (response) => {
                setSnackbarMessage(`SUCCESS! Status: ${response.status}, Text: ${response.text}`);
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                setIsSubmitting(false);
                onClose();
            },
            (error) => {
                setSnackbarMessage(`FAILED... Error: ${error}`);
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
                setIsSubmitting(false);
            }
        );
    }, 1000);

    return (
        <>
            <Dialog open={isOpen} onClose={onClose} disableRestoreFocus>
                <DialogTitle>Send Form Data</DialogTitle>
                <DialogContent>
                    <Form
                        onSubmit={handleSubmit}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Box mb={2}>
                                    <Typography variant="subtitle2">
                                        Enter the email to send the form data to:
                                    </Typography>
                                </Box>
                                <LabeledField name="email" label="Email" validate={validateEmail} fullWidth />
                                <DialogActions>
                                    <SubmitButton label="Send" disabled={isSubmitting} />
                                </DialogActions>
                            </form>
                        )}
                    />
                </DialogContent>
            </Dialog>
            <CustomSnackbar
                open={snackbarOpen}
                message={snackbarMessage}
                severity={snackbarSeverity}
                onClose={handleSnackbarClose}
            />
        </>
    );
}

export const MemoizedModal = React.memo(Modal);
