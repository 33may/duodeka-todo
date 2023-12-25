import { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PropTypes from "prop-types";
import { GlobalState } from "../../context/GlobalState.jsx";
import { TextField } from "@mui/material";
import TodoStatus from "./TodoStatus.jsx";
import TodoMenu from "./TodoMenu.jsx";

const TodoItem = ({ todo }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { deleteTodo, checkTodo, editTodo } = useContext(GlobalState);
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(todo.name);

    const handleEdit = () => {
        setEditedName(todo.name);
        setIsEditing(true);
    };

    const handleEditChange = e => setEditedName(e.target.value);

    const handleEditSubmit = () => {
        editTodo(todo.id, editedName);
        setIsEditing(false);
    };

    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleComplete = () => {
        checkTodo(todo.id);
        handleClose();
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
        handleClose();
    };

    const handleClose = () => setAnchorEl(null);

    return (
        <div className="flex flex-row border justify-between p-4 rounded-md">
            <div className="flex flex-col">
                {isEditing ? (
                    <TextField
                        value={editedName}
                        onChange={handleEditChange}
                        onBlur={handleEditSubmit}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleEditSubmit();
                        }}
                        variant="standard"
                    />
                ) : (
                    <div>{todo.name}</div>
                )}
                <TodoStatus status={todo.status} />
            </div>
            <IconButton onClick={handleClick}>
                <ArrowDropDownIcon />
            </IconButton>
            <TodoMenu
                handleComplete={handleComplete}
                handleClose={handleClose}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                anchorEl={anchorEl}
            />
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired
};

export default TodoItem;
