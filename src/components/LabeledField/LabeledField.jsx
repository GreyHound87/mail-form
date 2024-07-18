import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Field } from 'react-final-form';
import { renderTextField } from '../../utils/renderTextField';

export function LabeledField({ name, label, validate, multiline, rows, fullWidth }) {
    return (
        <Grid item xs={12} sm={fullWidth ? 12 : 6}>
            <Typography
                variant="subtitle2"
                sx={{
                    fontWeight: 700,
                }}
            >
                {label}
            </Typography>
            <Field
                name={name}
                component={renderTextField}
                label={label}
                validate={validate}
                multiline={multiline}
                rows={rows}
                id={name}
            />
        </Grid>
    );
}
