import React from 'react';
import { Button, Box } from '@mui/material';

export function SubmitButton({ label, disabled }) {
    return (
        <Box mt={2} sx={{ width: '100%' }}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={disabled}
                sx={{ width: '100%' }}
            >
                {label}
            </Button>
        </Box>
    );
}
