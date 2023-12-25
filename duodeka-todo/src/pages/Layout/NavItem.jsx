import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from "@mui/material";

const NavItem = ({ label, link }) => (
    <Button
        component={RouterLink}
        to={link}
        variant="text"
        color="inherit"
        sx={{ py: 2 }}
    >
        {label}
    </Button>
);

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default NavItem;
