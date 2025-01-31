import { useState } from 'react';
import styles from './PageMenu.module.css';
import { ReactComponent as AddIcon } from '../../../assets/add-item.svg';
import { ReactComponent as UpArrow } from '../../../assets/chevron-wide-up.svg';
import { ReactComponent as DownArrow } from '../../../assets/chevron-wide-down.svg';

const PageMenu = ({ isAddingItem, setIsAddingItem }) => {

    const [ isPageMenuOpen, setIsPageMenuOpen ] = useState(false);

    const togglePageMenu = () => {
        setIsPageMenuOpen(!isPageMenuOpen);
    }

    const handleAddItemClick = () => {
        setIsAddingItem(true);
        setIsPageMenuOpen(false);
    };

    return (
        <div
            className={`${styles.container} ${isPageMenuOpen ? styles.open : styles.closed}`}
            onClick={togglePageMenu}
        >
            <button className={styles.menuBtn}>
                {isPageMenuOpen
                    ? <DownArrow className={styles.btnIcons} />
                    : <UpArrow className={styles.btnIcons} />
                }
            </button>
            <div className={styles.menu}>
                <div className={styles.menuInner}>
                    <button
                        onClick={handleAddItemClick}
                    >
                        <div className={styles.menuIconContainer}>
                            <AddIcon className={styles.menuIcon} />
                            <p className={styles.menuIconLabel}>Add Item</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PageMenu;