import { useState, useReducer, useEffect } from 'react';
import styles from './JournalComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/journal.svg';

const JournalComponent = ({ journals, setJournals, isOpen }) => {
    return (
        <div className={`page-container ${isOpen.journal ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Journal logo" />}
                title="Journal"
            />
        </div>
    )
}

export default JournalComponent;