import React from 'react';
import * as PropTypes from "prop-types";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout/Layout.jsx";
import TodoList from "./pages/List/TodoList.jsx";
import Landing from "./pages/Landing/Landing";
import Info from "./pages/Info/Info";
import StateManagementPage from "./pages/StateManagement/StateManagmentPage";

const initialGlobalState = {
    count: 0,
};

// Create a Context for the (global) State
const GlobalState = React.createContext();

class Global extends React.Component {
    constructor(props) {
        super(props);

        // Set the initial (global) State
        this.state = {
            globals: initialGlobalState || {},
        };
    }

    // Expose the setGlobals function to the Globals object
    componentDidMount() {
        GlobalState.set = this.setGlobalState;
    }

    setGlobalState = (data = {}) => {
        const { globals } = this.state;

        // Loop over the data items by key, only updating those which have changed
        Object.keys(data).forEach((key) => {
            globals[key] = data[key];
        });

        // Update the state with the new State
        this.setState(globals);
    };

    render() {
        const { globals } = this.state;
        const { Root } = this.props;

        return (
            // Pass the current value of GlobalState, based on this components' State, down
            <GlobalState.Provider value={globals}>
                <Root />
            </GlobalState.Provider>
        );
    }
}

// Create a shorthand Hook for using the GlobalState
const useGlobalState = () => React.useContext(GlobalState);



BrowserRouter.propTypes = {children: PropTypes.node};
export default function App() {
    // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
    return (
        <Global Root={() => (
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
        )} />

    );
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;