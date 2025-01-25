import { useState, useReducer, useEffect } from 'react';
import styles from './CalendarComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/calendar.svg';

const CalendarComponent = ({ events, setEvents, isOpen }) => {
    return (
        <div className={`page-container ${isOpen.calendar ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Calendar logo" />}
                title="Calendar"
            />
        </div>
    )
}

export default CalendarComponent;