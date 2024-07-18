import React from 'react';
import { Form } from 'react-final-form';
import { Grid, Typography, Box, Divider, Link } from '@mui/material';
import { LabeledField } from '../LabeledField';
import { SubmitButton } from '../SubmitButton';
import { required, validateEmail } from '../../utils/validators';

function FormComponent({ onSubmit }) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                        <LabeledField name="firstName" label="Enter your first name" validate={required} />
                        <LabeledField name="email" label="Enter your email" validate={validateEmail} />
                        <Grid item xs={12}>
                            <LabeledField name="bio" label="Bio" validate={required} multiline rows={5} fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <LabeledField name="country" label="Country" validate={required} />
                        <LabeledField name="city" label="City" validate={required} />
                        <LabeledField name="address" label="Enter your address" validate={required} fullWidth />
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
                            <SubmitButton label="Save" />
                        </Grid>
                    </Grid>
                </form>
            )}
        />
    );
}

export const MemoizedFormComponent = React.memo(FormComponent);
