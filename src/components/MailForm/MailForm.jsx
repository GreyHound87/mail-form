import React from 'react';
import { Grid, Paper, Card, Box, Typography, Link, Divider } from '@mui/material';
import { FormComponent } from '../FormComponent';
/* import { Modal } from '../Modal'; */

export function MailForm() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
                <Paper elevation={1} component={Card}>
                    <Box p={3}>
                        <Typography variant="h6" gutterBottom>
                            Change your private information
                        </Typography>
                        <Typography variant="subtitle2">
                            Please read our{' '}
                            <Link href="https://www.google.com/" underline="none">
                                terms of use
                            </Link>{' '}
                            to be informed how we manage your private data.
                        </Typography>
                        <Box my={2}>
                            <Divider />
                        </Box>
                        <FormComponent />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
