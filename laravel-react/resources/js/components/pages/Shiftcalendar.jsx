import React, { useState } from 'react';
import Calendar from 'react-calendar';
import BackgroundCalendar from '../atom/BackgroundCalendar';
import 'react-calendar/dist/Calendar.css';

export default function Shiftcalendar() {
    const [value, onChange] = useState(new Date())
    // getFormatDate(date) {
    //     `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`
    // }

    return (
        <BackgroundCalendar>
            <div className='calendarContainer'>
                <Calendar
                    onChange={onChange}
                    locale="ja-JP"
                    value={value}
                />
            </div>
        </BackgroundCalendar>
    )

}