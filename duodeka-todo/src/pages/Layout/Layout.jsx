import PropTypes from 'prop-types';
import logo from '../../assets/logo.jpeg'
import NavItem from "./NavItem.jsx";
import { Link } from "react-router-dom";

const Layout = ({ children }) => (
    <div className="flex flex-col md:flex-row h-screen">
        <div className="flex justify-between md:justify-start items-center md:flex-col md:w-[20vw] w-full fixed md:h-full h-16 top-0 left-0 p-5 shadow-md z-10 bg-white">
            <Link to="/" className="shrink-0">
                <img src={logo} alt="Logo" className="h-auto md:max-h-full max-h-16" />
            </Link>
            <div className="flex w-full md:flex-col flex-row">
                <NavItem label="Todo" link="/todo" />
                <NavItem label="Info" link="/info" />
                <NavItem label="State" link="/state-management" />
            </div>
        </div>
        <div className="w-full md:ml-[20vw] h-full pt-16 md:pt-0 overflow-auto">
            {children}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
