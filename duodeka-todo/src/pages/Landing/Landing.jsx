import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function Landing() {
    return (
        <Container maxWidth="md" sx={{ mt: 16, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>
                Welcome to the TODO List App
            </Typography>

            <Box sx={{ my: 4 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 300 }}>
                    A Simplified Task Management Solution
                </Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    App offers a streamlined approach to manage daily tasks.
                    It allows you to add, edit, check, and delete items from your list
                    with ease. All items are managed in a global state, ensuring a
                    seamless user experience.
                </Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    Designed with Material-UI components, the app showcases a
                    modern interface that is both responsive and mobile-friendly.
                    Explore the app and discover an efficient way to stay organized.
                </Typography>
            </Box>
        </Container>
    );
}
