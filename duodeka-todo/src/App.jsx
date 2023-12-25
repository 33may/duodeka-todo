import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout/Layout.jsx";
import TodoList from "./pages/List/TodoList.jsx";
import Landing from "./pages/Landing/Landing";
import Info from "./pages/Info/Info";
import StateManagementPage from "./pages/StateManagement/StateManagmentPage";
import {GlobalStateProvider} from "./context/GlobalState.jsx";


// Create a shorthand Hook for using the GlobalState


export default function App() {
    // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
    return (
        <GlobalStateProvider>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/todo" element={<TodoList />} />
                        <Route path="/info" element={<Info />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="/state-management" element={<StateManagementPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </GlobalStateProvider>
    );
}

// // Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
// window.GlobalState = GlobalState;