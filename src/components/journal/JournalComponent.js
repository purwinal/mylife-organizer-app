import { useState, useReducer, useEffect } from 'react';
import styles from './JournalComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/journal.svg';

const JournalComponent = ({ journals, setJournals, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.journal ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Journal logo" />}
                title="Journal"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    )
}

export default JournalComponent;