import { useState, useReducer, useEffect } from 'react';
import styles from './TrashComponent.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/trash.svg';

const TrashComponent = ({ trash, setTrash, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.trash ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Trash logo" />}
                title="Trash"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    )
}

export default TrashComponent;