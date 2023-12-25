import TodoItem from "./TodoItem.jsx";
import {useContext, useEffect, useState} from "react";
import {GlobalState} from "../../context/GlobalState.jsx";
import { format } from 'date-fns';
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function DayItem({ date }) {

    const { todos, addTodo, deleteTodo, checkTodo } = useContext(GlobalState);

    const [dayList, setDayList] = useState([])

    useEffect(() => {
        setDayList(todos.filter(todo => {
            const todoDateFormatted = format(new Date(todo.date), 'yyyy-MM-dd');
            const currentDateFormatted = format(new Date(date), 'yyyy-MM-dd');
            return todoDateFormatted === currentDateFormatted;
        }));
    }, [todos, date]);

    const [isAdding, setIsAdding] = useState(false);
    const [newTodoName, setNewTodoName] = useState('');
    const handleAddClick = () => {
        setIsAdding(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
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
                    style={{width: '100%'}}
                    value={newTodoName}
                    onChange={(e) => setNewTodoName(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter TODO name"
                />
            )}
            {dayList.map((todo, index) => (
                <div key={index}>
                    <TodoItem todo={todo}/>
                </div>
            ))}
        </div>
    )
}