import { useState, useReducer, useEffect } from 'react';
import styles from './CaloriesComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/calories.svg';

const CaloriesComponent = ({ calories, setCalories, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.calories ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Calories logo" />}
                title="Calories"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    )
}

export default CaloriesComponent;