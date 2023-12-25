import TodoItem from "./TodoItem.jsx";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/GlobalState.jsx";
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const DayItem = ({ date }) => {
    const { todos, addTodo } = useContext(GlobalState);
    const [dayList, setDayList] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [newTodoName, setNewTodoName] = useState('');

    useEffect(() => {
        const sortedTodos = _.orderBy(
            todos.filter(todo => format(new Date(todo.date), 'yyyy-MM-dd') === format(new Date(date), 'yyyy-MM-dd')),
            ['status'],
            ['desc']
        );
        setDayList(sortedTodos);
    }, [todos, date]);

    const handleAddClick = () => setIsAdding(true);

    const handleKeyPress = event => {
        if (event.key === 'Enter' && newTodoName.trim().length) {
            addTodo(newTodoName, date);
            setNewTodoName('');
            setIsAdding(false);
        }
    };

    return (
        <div className="w-full min-h-[600px] border">
            <div className="border-b p-3 text-xl font-thin flex justify-between items-center">
                {format(new Date(date), 'EEEE, MMMM d')}
                <Button onClick={handleAddClick}>
                    <AddIcon />
                </Button>
            </div>
            {isAdding && (
                <TextField
                    id="standard-basic"
                    variant="standard"
                    autoFocus
                    style={{ width: '100%' }}
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter TODO name"
                />
            )}
            {dayList.map((todo, index) => (
                <div key={index}>
                    <TodoItem todo={todo} />
                </div>
            ))}
        </div>
    );
};

DayItem.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
};

export default DayItem;
