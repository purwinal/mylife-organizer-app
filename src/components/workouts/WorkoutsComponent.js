import { useState, useReducer, useEffect } from 'react';
import styles from './WorkoutsComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/workout.svg';

const WorkoutsComponent = ({ workouts, setWorkouts, isOpen }) => {

	const [ exercises, setExercises ] = useState(() => {
		return JSON.parse(localStorage.getItem('Exercises')) || []
	});

	useEffect(() => {
		localStorage.setItem('Exercises', JSON.stringify(exercises))
	}, [exercises])

	const [ exerciseAccordionItems, setExerciseAccordionItems ] = useState(() => {
		return JSON.parse(localStorage.getItem('ExerciseAccordionItems')) || []
	});

	useEffect(() => {
		localStorage.setItem('ExerciseAccordionItems', JSON.stringify(exerciseAccordionItems))
	}, [exerciseAccordionItems])

    return (
        <section className={`${styles.container} ${isOpen.workouts ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Workout logo" />}
                title="Workouts"
            />
			<div className={styles.body}>

			</div>
			<PageMenu />
        </section>
    )
}

export default WorkoutsComponent;