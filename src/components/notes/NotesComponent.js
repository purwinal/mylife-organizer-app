import { useState, useReducer, useEffect } from 'react';
import styles from './NotesComponent.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/notes.svg';

const NotesComponent = ({ notes, setNotes, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.notes ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={styles.logo} alt="Notes logo" />}
                title="Notes"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    )
}

export default NotesComponent;