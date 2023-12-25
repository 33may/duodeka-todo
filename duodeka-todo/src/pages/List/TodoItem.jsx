import React, {useContext, useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from "prop-types";
import {GlobalState} from "../../context/GlobalState.jsx";

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired
};

export default function TodoItem({ todo }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const { deleteTodo, checkTodo } = useContext(GlobalState);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleComplete = () => {
        checkTodo(todo.id)
        console.log(todo)
        handleClose();
    }

    const handleEdit = () => {
        checkTodo(todo.id)
        handleClose();
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
        handleClose();
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getColorForStatus = (status) => {
        switch (status) {
            case 'complete':
                return 'green';
            case 'waiting':
                return 'cornflowerblue';
            case 'edited':
                return 'purple';
            default:
                return 'black';
        }
    };


    return (
        <div className="flex flex-row border justify-between p-4 rounded-md">
            <div className="flex flex-col">
                <div>
                    {todo.name}
                </div>
                <div style={{ color: getColorForStatus(todo.status) }}>
                    {todo.status}
                </div>
            </div>
            <IconButton onClick={handleClick}>
                <ArrowDropDownIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    sx: { padding: 0 }
                }}
                sx={{
                    margin: 0,
                    borderRadius: '1px',
                    '& .MuiMenu-list': {
                        padding: 0,
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleComplete} >Complete</MenuItem>
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>

        </div>
    );
}
