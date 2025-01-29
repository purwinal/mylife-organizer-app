import { useState } from 'react';
import styles from './MedicationComponent.module.css';
import Header from '../app/Header.js';
import AccordionCard from '../app/accordion/AccordionCard.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/medication.svg';

const MedicationComponent = ({ medications, dispatch, isOpen }) => {
    const [ editItemId, setEditItemId ] = useState(null);
    const [ editItemInput, setEditItemInput ] = useState({ title: '', dosage: '' });
    const [ addItemInput, setAddItemInput ] = useState({ title: '', dosage: '' });

    return (
        <section className={`${styles.container} ${isOpen.medications ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={styles.logo} alt="Medication logo" />}
                title="Medication"
            />
            <div className={styles.body}>
                <AccordionCard
                    array={medications}
                    dispatch={dispatch}
                    addItemInput={addItemInput}
                    setAddItemInput={setAddItemInput}
                    editItemInput={editItemInput}
                    setEditItemInput={setEditItemInput}
                    editItemId={editItemId}
                    setEditItemId={setEditItemId}
                    contentTitle="Medicine"
                />
            </div>
            <PageNav/>
        </section>
    )
}

export default MedicationComponent;