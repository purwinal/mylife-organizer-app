import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNav.module.css';
import navItemStyles from './NavItemCard.module.css';
import NavItemCard from './NavItemCard';
import { ReactComponent as HomeIcon } from '../../../assets/home.svg';
import { ReactComponent as TodoListIcon } from '../../../assets/todo-list.svg';
import { ReactComponent as NotesIcon} from '../../../assets/notes.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/calendar.svg';
import { ReactComponent as JournalIcon } from '../../../assets/journal.svg';
import { ReactComponent as FinancesIcon } from '../../../assets/finances.svg';
import { ReactComponent as MedicationIcon } from '../../../assets/medication.svg';
import { ReactComponent as CaloriesIcon } from '../../../assets/calories.svg';
import { ReactComponent as WorkoutIcon } from '../../../assets/workout.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/settings.svg';
import { ReactComponent as TrashIcon } from '../../../assets/trash.svg';
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../../assets/menu-close.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/chevron-right.svg';

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
        <div className={styles.container}>
            <button className={styles.menuBtn} onClick={toggleMenu}>
                {isMenuOpen
                    ? <CloseMenuIcon className={styles.closeMenuIcon} />
                    : <MenuIcon className={styles.openMenuIcon} />
                }
            </button>
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : styles.closed}`} ref={menuRef}>
                <div className={styles.logoSection}>
                    <div className={styles.logoText}>
                        <Link to="/" onClick={() => toggleComponent("home")}>
                            <h2>MyLife</h2>
                            <h3>Organizer</h3>
                        </Link>
                    </div>
                </div>
                <ul className={`${styles.navMenuUl}`}>
                    <NavItemCard
                        location="/"
                        toggleComponent={toggleComponent}
                        togglePage="home"
                        icon=<HomeIcon
                                className={navItemStyles.navItemIcon}
                                alt="Overview icon"
                            />
                        title="Overview"
                    />
                    <NavItemCard
                        location="/to-do-lists"
                        toggleComponent={toggleComponent}
                        togglePage="toDoLists"
                        icon=<TodoListIcon
                                className={navItemStyles.navItemIcon}
                                alt="To-do list icon"
                            />
                        title="To-Do Lists"
                    />
                    <NavItemCard
                        location="/notes"
                        toggleComponent={toggleComponent}
                        togglePage="notes"
                        icon=<NotesIcon
                                className={navItemStyles.navItemIcon}
                                alt="Notes icon"
                            />
                        title="Notes"
                    />
                    <NavItemCard
                        location="/calendar"
                        toggleComponent={toggleComponent}
                        togglePage="calendar"
                        icon=<CalendarIcon
                                className={navItemStyles.navItemIcon}
                                alt="Calendar icon"
                            />
                        title="Calendar"
                    />
                    <NavItemCard
                        location="/finances"
                        toggleComponent={toggleComponent}
                        togglePage="finances"
                        icon=<FinancesIcon
                                className={navItemStyles.navItemIcon}
                                alt="Finances icon"
                            />
                        title="Finances"
                    />
                    <NavItemCard
                        location="/medications"
                        toggleComponent={toggleComponent}
                        togglePage="medications"
                        icon=<MedicationIcon
                                className={navItemStyles.navItemIcon}
                                alt="Medication icon"
                            />
                        title="Medication"
                    />
                    <NavItemCard
                        location="/workouts"
                        toggleComponent={toggleComponent}
                        togglePage="workouts"
                        icon=<WorkoutIcon
                                className={navItemStyles.navItemIcon}
                                alt="Workout icon"
                            />
                        title="Workouts"
                    />
                    <NavItemCard
                        location="/calories"
                        toggleComponent={toggleComponent}
                        togglePage="calories"
                        icon=<CaloriesIcon
                                className={navItemStyles.navItemIcon}
                                alt="Calories icon"
                            />
                        title="Calories"
                    />
                    <NavItemCard
                        location="/journal"
                        toggleComponent={toggleComponent}
                        togglePage="journal"
                        icon=<JournalIcon
                                className={navItemStyles.navItemIcon}
                                alt="Journal icon"
                            />
                        title="Journal"
                    />
                    <NavItemCard
                        location="/settings"
                        toggleComponent={toggleComponent}
                        togglePage="settings"
                        icon=<SettingsIcon
                                className={navItemStyles.navItemIcon}
                                alt="Settings icon"
                            />
                        title="Settings"
                    />
                    <NavItemCard
                        location="/trash"
                        toggleComponent={toggleComponent}
                        togglePage="trash"
                        icon=<TrashIcon
                                className={navItemStyles.navItemIcon}
                                alt="Trash icon"
                            />
                        title="Trash"
                    />
                </ul>
            </nav>
        </div>
    )
}

export default MainNav;