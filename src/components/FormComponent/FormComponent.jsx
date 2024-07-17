import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Grid, Typography, Box, Divider, Link } from '@mui/material';
import { renderTextField } from '../../utils/renderTextField';
import { required, validateEmail } from '../../utils/validators';

export function FormComponent({ onSubmit }) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Enter your first name
                            </Typography>
                            <Field
                                name="firstName"
                                component={renderTextField}
                                label="First name *"
                                autoFocus
                                validate={required}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Enter your email
                            </Typography>
                            <Field name="email" component={renderTextField} label="Email *" validate={validateEmail} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Bio
                            </Typography>
                            <Field
                                name="bio"
                                component={renderTextField}
                                label="Bio"
                                multiline
                                rows={5}
                                validate={required}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Country
                            </Typography>
                            <Field name="country" component={renderTextField} label="Country *" validate={required} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                City
                            </Typography>
                            <Field name="city" component={renderTextField} label="City *" validate={required} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontWeight: 700,
                                }}
                            >
                                Enter your address
                            </Typography>
                            <Field name="address" component={renderTextField} label="Address *" validate={required} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box mt={2}>
                                <Typography variant="subtitle2">
                                    You may also consider to update your{' '}
                                    <Link href="https://www.google.com/" underline="none">
                                        billing information
                                    </Link>
                                    .
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box mt={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    sx={{ width: '100%' }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            )}
        />
    );
}
