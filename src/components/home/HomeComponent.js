import styles from './HomeComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/home.svg';
import RecentSection from './RecentSection.js';

const HomeComponent = ({
    isOpen,
    toDoLists,
    notes,
    events,
    expenses,
    medications,
    workouts,
    calories,
    journals,
    trash
}) => {

    return (
        <div className={`page-container ${isOpen.home ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Home logo" />}
                title="Overview"
            />
            <div>
                <RecentSection
                    heading="To-Do Lists"
                    array={toDoLists}
                />
                <hr />
                <RecentSection
                    heading="Notes"
                    array={notes}
                />
                <hr />
                <RecentSection
                    heading="Upcoming Events"
                    array={events}
                />
                <hr />
                <RecentSection
                    heading="Finances"
                    array={expenses}
                />
                <hr />
                <RecentSection
                    heading="Medications"
                    array={medications}
                />
                <hr />
                <RecentSection
                    heading="Workouts"
                    array={workouts}
                />
                <hr />
                <RecentSection
                    heading="Calories"
                    array={calories}
                />
                <hr />
                <RecentSection
                    heading="Journals"
                    array={journals}
                />
                <hr />
                <RecentSection
                    heading="Recently Deleted"
                    array={trash}
                />
            </div>
        </div>
    )
}

export default HomeComponent;