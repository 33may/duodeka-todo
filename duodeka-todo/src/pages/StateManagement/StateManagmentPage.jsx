import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export default function StateManagementPage() {
    return (
        <Container maxWidth="md" sx={{ mt: 16, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>State Management in React</Typography>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>Redux</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    Redux is a powerful tool for managing application state globally in complex React applications. It brings benefits like centralized state control, which makes state changes predictable and debugging easier. Redux is especially valuable in large-scale projects where managing state across numerous components can be challenging. However, it introduces a certain level of complexity and requires writing more boilerplate code, which may be overwhelming for beginners or smaller projects.
                </Typography>
            </Box>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>Context API and Hooks</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    The Context API, combined with Hooks in React, offers a simpler and more streamlined approach to state management, especially useful for small to medium-sized applications. This combination allows developers to manage state with less overhead and more straightforward code, making it easier to maintain and understand. It’s integrated directly into React, which means there's no need for additional libraries, simplifying the overall development process.
                </Typography>
            </Box>

            <Box sx={{ my: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>Comparative Analysis</Typography>
                <Typography paragraph sx={{ fontWeight: 300 }}>
                    Choosing between Redux and Context API with Hooks depends on several factors like the size and complexity of the project, as well as the team’s familiarity with these tools. Redux excels in complex, large-scale applications where fine-grained control over global state is necessary. In contrast, Context API with Hooks is more suited for smaller applications or specific parts of a larger application where simpler state management is sufficient.
                </Typography>
            </Box>
        </Container>
    );
}
