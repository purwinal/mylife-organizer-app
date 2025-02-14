import styles from './HomeComponent.module.css';
import headerStyles from '../app/Header.module.css';
import { Link } from 'react-router-dom';
import Header from '../app/Header.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/home.svg';
import { ReactComponent as MedicationIcon } from '../../assets/medication.svg';
import { ReactComponent as TodoListIcon } from '../../assets/todo-list.svg';

const HomeComponent = ({
    isOpen,
    setIsOpen
}) => {

	const toggleComponent = (component) => {
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
        <section className={`${styles.container} ${isOpen.home ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="Home logo" />}
                title="Overview"
            />
            <div className={styles.body}>
				<div className={styles.frequentApps}>
					<Link to="/medications" onClick={() => toggleComponent("medications")}>
						<div className={styles.appContainer}>
							<MedicationIcon className={`${styles.appIcons} ${styles.medicationIcon}`} alt="Medication icon" />
							<h2>Medications</h2>
						</div>
					</Link>
					<Link to="/to-do-lists" onClick={() => toggleComponent("toDoLists")}>
						<div className={styles.appContainer}>
							<TodoListIcon className={`${styles.appIcons} ${styles.toDoListIcon}`} alt="To-do list icon" />
							<h2>To-Do Lists</h2>
						</div>
					</Link>
				</div>
            </div>
            <PageMenu />
        </section>
    )
}

export default HomeComponent;