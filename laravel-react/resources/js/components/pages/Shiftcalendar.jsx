import React from 'react';
import Calendar from 'react-calendar';
import BackgroundCalendar from '../atom/BackgroundCalendar';

export default function Shiftcalendar() {
    return (
        <BackgroundCalendar>
            <div className='calendarContainer'>
                <Calendar/>
            </div>
        </BackgroundCalendar>
    )

}