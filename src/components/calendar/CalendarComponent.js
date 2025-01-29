import { useState, useReducer, useEffect } from 'react';
import styles from './CalendarComponent.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/calendar.svg';

const CalendarComponent = ({ events, setEvents, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.calendar ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={styles.logo} alt="Calendar logo" />}
                title="Calendar"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    )
}

export default CalendarComponent;