import React from 'react';
import { format, addDays } from 'date-fns';
import DayItem from './DayItem';

export default function TodoList() {
    const today = new Date();

    return (
        <div className="container-lg flex flex-row overflow-x-auto mt-[5%]">
            {[...Array(7)].map((_, i) => {
                const dayDate = addDays(today, i);
                return (
                    <div key={i} className="flex-none w-[30%] p-2 m-2">
                        <DayItem date={format(dayDate, 'yyyy-MM-dd')} />
                    </div>
                );
            })}
        </div>
    );
}
