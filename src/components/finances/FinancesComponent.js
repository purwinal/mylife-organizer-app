import { useState, useReducer, useEffect } from 'react';
import styles from './FinancesComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import AccordionCard from '../app/accordion/AccordionCard.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/finances.svg';

const FinancesComponent = ({ expenses, setExpenses, isOpen }) => {

    const [ isAddingItem, setIsAddingItem ] = useState(false);
    const [ editItemId, setEditItemId ] = useState(null);
    const [ editItemInput, setEditItemInput ] = useState({ title: '', dosage: '' });
    const [ addItemInput, setAddItemInput ] = useState({ title: '', dosage: '' });

	return (
		<section className={`${styles.container} ${isOpen.finances ? styles.open : styles.closed}`}>
			<Header
				logo={<Logo className={headerStyles.logo} alt="Finances logo" />}
				title="Finances"
			/>
            <div className={styles.body}>

            </div>
            <PageMenu
                isAddingItem={isAddingItem}
                setIsAddingItem={setIsAddingItem}
            />
		</section>
	)
}

export default FinancesComponent;