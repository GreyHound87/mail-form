import React from 'react';
import { useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, Typography } from '@mui/material';
import { Form, Field } from 'react-final-form';
import emailjs from '@emailjs/browser';
import { DateTime } from 'luxon';
import { renderTextField } from '../../utils/renderTextField';
import { validateEmail } from '../../utils/validators';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../constants/configID';

function Modal({ isOpen, onClose }) {
    const formData = useSelector((state) => state.form.values);

    const handleSubmit = (values) => {
        const emailTo = values.email;

        const formattedDate = DateTime.now().setLocale('ru').toFormat('dd/MM/yyyy HH:mm');
        const emailData = {
            ...formData,
            emailTo,
            send_time: formattedDate,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID).then(
            (/* response */) => {
                /* console.log('SUCCESS!', response.status, response.text); */
                onClose();
            },
            (/* error */) => {
                /* console.log('FAILED...', error); */
            }
        );
    };

    return (
        <Dialog open={isOpen} onClose={onClose} disableRestoreFocus>
            <DialogTitle>Send Form Data</DialogTitle>
            <DialogContent>
                <Form
                    onSubmit={handleSubmit}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box mb={2}>
                                <Typography variant="subtitle2">Enter the email to send the form data to:</Typography>
                            </Box>
                            <Field
                                name="email"
                                component={renderTextField}
                                label="Email"
                                fullWidth
                                required
                                variant="outlined"
                                autoFocus
                                validate={validateEmail}
                            />
                            <DialogActions>
                                <Button type="submit" color="primary" variant="contained" size="large">
                                    Send
                                </Button>
                            </DialogActions>
                        </form>
                    )}
                />
            </DialogContent>
        </Dialog>
    );
}

export const MemoizedModal = React.memo(Modal);
