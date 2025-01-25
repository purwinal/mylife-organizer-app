import { useState, useReducer, useEffect } from 'react';
import styles from './TrashComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/trash.svg';

const TrashComponent = ({ trash, setTrash, isOpen }) => {
    return (
        <div className={`page-container ${isOpen.trash ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Trash logo" />}
                title="Trash"
            />
        </div>
    )
}

export default TrashComponent;