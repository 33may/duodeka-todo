import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const TodoMenu = ({ anchorEl, handleClose, handleComplete, handleEdit, handleDelete }) => (
    <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ sx: { padding: 0 } }}
        sx={{
            margin: 0,
            borderRadius: '1px',
            '& .MuiMenu-list': { padding: 0 },
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
        <MenuItem onClick={handleComplete}>Complete</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
);

TodoMenu.propTypes = {
    anchorEl: PropTypes.any,
    handleClose: PropTypes.func.isRequired,
    handleComplete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default TodoMenu;
