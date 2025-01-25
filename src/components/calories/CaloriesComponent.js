import { useState, useReducer, useEffect } from 'react';
import styles from './CaloriesComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/calories.svg';

const CaloriesComponent = ({ calories, setCalories, isOpen }) => {
    return (
        <div className={`page-container ${isOpen.calories ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Calories logo" />}
                title="Calories"
            />
        </div>
    )
}

export default CaloriesComponent;