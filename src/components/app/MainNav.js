import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './MainNav.module.css';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as TodoListIcon } from '../../assets/todo-list.svg';
import { ReactComponent as NotesIcon} from '../../assets/notes.svg';
import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg';
import { ReactComponent as JournalIcon } from '../../assets/journal.svg';
import { ReactComponent as FinancesIcon } from '../../assets/finances.svg';
import { ReactComponent as MedicationIcon } from '../../assets/medication.svg';
import { ReactComponent as CaloriesIcon } from '../../assets/calories.svg';
import { ReactComponent as WorkoutIcon } from '../../assets/workout.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../assets/menu-close.svg';

const MainNav = ({ setIsOpen }) => {
	const [ isMenuOpen, setIsMenuOpen] = useState(false);

// Closes menu when clicking outside of it
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        };
    });

// Toggle functions
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleComponent = (component) => {
        setIsMenuOpen(false);
        setIsOpen({
            home: false,
            toDoLists: false,
            notes: false,
            calendar: false,
            finances: false,
            medications: false,
            workouts: false,
            calories: false,
            journal: false,
            trash: false,
            [component]: true
        });
    };

    return (
        <div>
            <button className={styles.menuBtn} onClick={toggleMenu}>
                {isMenuOpen
                    ? <CloseMenuIcon className={styles.closeMenuIcon} />
                    : <MenuIcon className={styles.openMenuIcon} />
                }
            </button>
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : styles.closed}`} ref={menuRef}>
                <div className={styles.logoContainer}>
                    <div className={styles.logoSection}>
                        <div className={styles.logoText}>
                            <Link to="/" onClick={() => toggleComponent("home")}>
                                <h2>MyLife</h2>
                                <h3>Organizer</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <ul className={`${styles.navMenuUl}`}>
                    <li>
                        <NavLink className={styles.navItem} to="/" onClick={() => toggleComponent("home")}>
                            <HomeIcon className={styles.navItemIcon} alt="Overview icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Overview</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/to-do-lists" onClick={() => toggleComponent("toDoLists")}>
                            <TodoListIcon className={styles.navItemIcon} alt="To-do list icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>To-Do Lists</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/notes" onClick={() => toggleComponent("notes")}>
                            <NotesIcon className={styles.navItemIcon} alt="Notes icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Notes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/calendar" onClick={() => toggleComponent("calendar")}>
                            <CalendarIcon className={styles.navItemIcon} alt="Calendar icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Calendar</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/finances" onClick={() => toggleComponent("finances")}>
                            <FinancesIcon className={styles.navItemIcon} alt="Finances icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Finances</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/medications" onClick={() => toggleComponent("medications")}>
                            <MedicationIcon className={styles.navItemIcon} alt="Medication icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Medication</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/workouts" onClick={() => toggleComponent("workouts")}>
                            <WorkoutIcon className={styles.navItemIcon} alt="Workout icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Workouts</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/calories" onClick={() => toggleComponent("calories")}>
                            <CaloriesIcon className={styles.navItemIcon} alt="Health icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Calories</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/journal" onClick={() => toggleComponent("journal")}>
                            <JournalIcon className={styles.navItemIcon} alt="Journal icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Journal</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/settings" onClick={() => toggleComponent("trash")}>
                            <SettingsIcon className={styles.navItemIcon} alt="Settings icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Settings</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navItem} to="/trash" onClick={() => toggleComponent("trash")}>
                            <TrashIcon className={styles.navItemIcon} alt="Trash icon" />
                            <span className={`${styles.navItemName} ${styles.hoverUnderline}`}>Trash</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav;