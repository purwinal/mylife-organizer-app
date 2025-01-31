import { useState, useReducer, useEffect } from 'react';
import styles from './NotesComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/notes.svg';

const NotesComponent = ({ notes, setNotes, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.notes ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Notes logo" />}
                title="Notes"
            />
            <div className={styles.body}>
            
            </div>
            <PageMenu />
        </section>
    )
}

export default NotesComponent;