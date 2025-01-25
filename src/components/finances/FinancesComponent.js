import { useState, useReducer, useEffect } from 'react';
import styles from './FinancesComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/finances.svg';

const FinancesComponent = ({ expenses, setExpenses, isOpen }) => {

	const [ isChecked, setIsChecked ] = useState(() => {
		return JSON.parse(localStorage.getItem('Checked')) || false
	});

		useEffect(() => {
			localStorage.setItem('Checked', JSON.stringify(isChecked))
		}, [isChecked])

	return (
		<div className={`page-container ${isOpen.finances ? "open" : "closed"}`}>
			<Header
				logo={<Logo className="header-logo" alt="Finances logo" />}
				title="Finances"
			/>
		</div>
	)
}

export default FinancesComponent;