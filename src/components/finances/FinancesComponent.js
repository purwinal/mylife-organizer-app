import { useState, useReducer, useEffect } from 'react';
import styles from './FinancesComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
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
				logo={<Logo className={headerStyles.logo} alt="Finances logo" />}
				title="Finances"
			/>
           <div className={styles.body}>

			</div>
			<PageMenu />
		</section>
	)
}

export default FinancesComponent;