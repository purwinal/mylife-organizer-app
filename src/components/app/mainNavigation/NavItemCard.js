import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../assets/chevron-right.svg';
import styles from './NavItemCard.module.css';

const NavItemCard = ({ location, toggleComponent, togglePage, icon, title  }) => {
    return (
        <li className={styles.container}>
            <NavLink className={styles.navItem} to={location} onClick={() => toggleComponent(togglePage)}>
                <div>
                    {icon}
                </div>
                <div className={styles.navItemTitle}>
                    <div className={`${styles.navItemName} ${styles.hoverUnderline}`}>{title}</div>
                    <div>
                    <ArrowIcon className={styles.navItemArrow} />
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default NavItemCard;