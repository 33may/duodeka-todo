import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function StateManagementInfo() {
    return (
        <Container maxWidth="md" sx={{ mt: 16, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>Info</Typography>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>Context API</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    The Context API in React is a powerful tool for managing global state within an application. It allows developers to bypass the constraints of prop drilling, providing a more efficient way to share state across multiple components. This is particularly beneficial for sharing data that doesn't change often, like user settings, themes, or authentication status, ensuring smoother and more maintainable code.
                </Typography>
            </Box>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>Prop Drilling</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    Prop drilling is the process of passing data from a parent component through various levels of child components. While simple for small applications, it becomes cumbersome and less efficient in larger, more deeply nested applications. Prop drilling can lead to maintenance challenges, as changes in the data structure require updates across all intermediary components, increasing the likelihood of bugs and complexity.
                </Typography>
            </Box>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 300 }}>State Managers</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    State managers like Redux and MobX offer robust solutions for managing state in complex React applications. They provide a centralized store for all states, allowing for more predictable and controlled state transitions. These tools come with added benefits like middleware support, time-travel debugging, and better scalability. However, they also introduce additional layers of abstraction and complexity, which might be overkill for simpler applications.
                </Typography>
            </Box>
        </Container>
    );
}
