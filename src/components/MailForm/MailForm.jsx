import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Card, Box, Typography, Link, Divider, Container } from '@mui/material';
import { FormComponent } from '../FormComponent';
import { Modal } from '../Modal';
import { setFormValues } from '../../redux/slices/formSlice';

export function MailForm() {
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        /* console.log('handleFormSubmit values:', values); */
        dispatch(setFormValues(values));
        setModalOpen(true);
    };

    const handleModalSubmit = (/* email */) => {
        /* console.log('Form data:', formData);
        console.log('Send to email:', email); */
        setModalOpen(false);
    };

    return (
        <>
            <Container maxWidth={'lg'} sx={{ maxWidth: '1280px !important' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Paper elevation={1} component={Card}>
                            <Box p={3}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    Change your private information
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 500,
                                        color: 'rgb(103, 119, 136)',
                                    }}
                                >
                                    Please read our{' '}
                                    <Link href="https://www.google.com/" underline="none">
                                        terms of use
                                    </Link>{' '}
                                    to be informed how we manage your private data.
                                </Typography>
                                <Box my={2}>
                                    <Divider />
                                </Box>
                                <FormComponent onSubmit={handleFormSubmit} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleModalSubmit} />
        </>
    );
}
