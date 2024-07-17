import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Paper, Card, Box, Typography, Link, Divider, Container } from '@mui/material';
import { MemoizedFormComponent } from '../FormComponent';
import { MemoizedModal } from '../Modal';
import { setFormValues } from '../../redux/slices/formSlice';

export function MailForm() {
    const [isModalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleFormSubmit = useCallback(
        (values) => {
            dispatch(setFormValues(values));
            setModalOpen(true);
        },
        [dispatch]
    );

    const handleModalSubmit = useCallback(() => {
        setModalOpen(false);
    }, []);

    const handleModalClose = useCallback(() => {
        setModalOpen(false);
    }, []);

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
                                <MemoizedFormComponent onSubmit={handleFormSubmit} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <MemoizedModal isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleModalSubmit} />
        </>
    );
}
