import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {Button} from "@mui/material";

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function NavItem({ label, link }) {
    return (
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
}
