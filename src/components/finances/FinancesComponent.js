import { useState, useReducer, useEffect } from 'react';
import styles from './FinancesComponent.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/finances.svg';

const FinancesComponent = ({ expenses, setExpenses, isOpen }) => {

	const [ isChecked, setIsChecked ] = useState(() => {
		return JSON.parse(localStorage.getItem('Checked')) || false
	});

		useEffect(() => {
			localStorage.setItem('Checked', JSON.stringify(isChecked))
		}, [isChecked])

	return (
		<section className={`${styles.container} ${isOpen.finances ? styles.open : styles.closed}`}>
			<Header
				logo={<Logo className={styles.logo} alt="Finances logo" />}
				title="Finances"
			/>
           <div className={styles.body}>

			</div>
			<PageNav/>
		</section>
	)
}

export default FinancesComponent;