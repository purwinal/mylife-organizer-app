import { useState } from 'react';
import styles from './PageNav.module.css';
import { ReactComponent as UpArrow } from '../../assets/chevron-up.svg';
import { ReactComponent as DownArrow } from '../../assets/chevron-down.svg';

const PageNav = () => {
    const [ isPageNavOpen, setIsPageNavOpen ] = useState(false);
    const togglePageNav = () => {
        setIsPageNavOpen(!isPageNavOpen);
    }

    return (
        <div className={styles.container}>
            <div className={styles.btnWrapper}>
                <button className={styles.menuBtn} onClick={togglePageNav}>
                    {isPageNavOpen
                        ? <DownArrow className={styles.closeNavIcon} />
                        : <UpArrow className={styles.openNavIcon} />
                    }
                </button>
            </div>
            <div className={`${styles.pageMenu} ${isPageNavOpen ? styles.open : styles.closed}`}>
                
            </div>
        </div>
    )
}

export default PageNav;