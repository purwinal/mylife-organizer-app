import { useState, useReducer, useEffect } from 'react';
import styles from './CalendarComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/calendar.svg';

const CalendarComponent = ({ events, setEvents, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.calendar ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Calendar logo" />}
                title="Calendar"
            />
            <div className={styles.body}>

            </div>
            <PageMenu />
        </section>
    )
}

export default CalendarComponent;