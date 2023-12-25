import React from 'react';
import { format, addDays } from 'date-fns';
import DayItem from './DayItem';

const TodoList = () => {
    const today = new Date();

    return (
        <div className="container-lg flex flex-row overflow-x-auto mt-[5%]">
            {[...Array(7)].map((_, i) => (
                <div key={i} className="flex-none w-[30%] p-2 m-2">
                    <DayItem date={format(addDays(today, i), 'yyyy-MM-dd')} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
