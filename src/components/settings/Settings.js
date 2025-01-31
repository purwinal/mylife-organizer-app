import { useState, useReducer, useEffect } from 'react';
import styles from './Settings.module.css';
import headerStyles from '../app/Header.module.css';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/settings.svg';

const Settings = ({ settings, setSetSettings, isOpen }) => {
    return (
        <section className={`${styles.container} ${isOpen.settings ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Settings logo" />}
                title="Settings"
            />
            <div className={styles.body}>

            </div>
            <PageMenu />
        </section>
    );
}

export default Settings;