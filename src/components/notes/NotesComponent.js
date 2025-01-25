import { useState, useReducer, useEffect } from 'react';
import styles from './NotesComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/notes.svg';

const NotesComponent = ({ notes, setNotes, isOpen }) => {
    return (
        <div className={`page-container ${isOpen.notes ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Notes logo" />}
                title="Notes"
            />
        </div>
    )
}

export default NotesComponent;