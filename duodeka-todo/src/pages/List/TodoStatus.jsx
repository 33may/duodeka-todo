import PropTypes from 'prop-types';

const TodoStatus = ({ status }) => {
    const getColorForStatus = status => {
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
        <div style={{ color: getColorForStatus(status) }}>
            {status}
        </div>
    );
};

TodoStatus.propTypes = {
    status: PropTypes.string.isRequired
};

export default TodoStatus;
