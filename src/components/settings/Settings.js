import { useState, useReducer, useEffect } from 'react';
import styles from './Settings.module.css';
import Header from '../app/Header.js';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/settings.svg';

const Settings = ({ settings, setSetSettings, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.settings ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={styles.logo} alt="Settings logo" />}
                title="Settings"
            />
            <div className={styles.body}>

            </div>
            <PageNav/>
        </section>
    );
}

export default Settings;