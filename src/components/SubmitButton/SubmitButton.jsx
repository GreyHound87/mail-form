import React from 'react';
import { Button, Box } from '@mui/material';

export function SubmitButton({ label }) {
    return (
        <Box mt={2}>
            <Button type="submit" variant="contained" color="primary" size="large" sx={{ width: '100%' }}>
                {label}
            </Button>
        </Box>
    );
}
