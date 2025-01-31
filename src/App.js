import { useState, useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import headerStyles from './components/app/Header.module.css';
import HomeComponent from './components/home/HomeComponent.js';
import ToDoListsComponent from './components/todo-lists/ToDoListsComponent.js';
import NotesComponent from './components/notes/NotesComponent.js';
import CalendarComponent from './components/calendar/CalendarComponent.js';
import FinancesComponent from './components/finances/FinancesComponent.js';
import MedicationComponent from './components/medication/MedicationComponent.js';
import WorkoutsComponent from './components/workouts/WorkoutsComponent.js';
import CaloriesComponent from './components/calories/CaloriesComponent.js';
import JournalComponent from './components/journal/JournalComponent.js';
import Settings from './components/settings/Settings.js';
import TrashComponent from './components/trash/TrashComponent.js';
import MainNav from './components/app/mainNavigation/MainNav.js';
import medicationsReducer from './reducers/medicationsReducer.js';
import { initialState } from './reducers/medicationsReducer.js';
import Header from './components/app/Header.js';
import RecentSection from './components/home/RecentSection.js';
import PageMenu from './components/app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from './assets/home.svg';

function App() {

// To-Do List State
	const [ toDoLists, setToDoLists ] = useState(() => {
		return JSON.parse(localStorage.getItem('ToDoLists')) || []
	});

	useEffect(() => {
		localStorage.setItem('ToDoLists', JSON.stringify(toDoLists))
	}, [toDoLists]);

// Notes State
	const [ notes, setNotes ] = useState(() => {
		return JSON.parse(localStorage.getItem('Notes')) || []
	});

	useEffect(() => {
		localStorage.setItem('Notes', JSON.stringify(notes))
	}, [notes])

// Calendar State
	const [ events, setEvents ] = useState(() => {
		return JSON.parse(localStorage.getItem('Events')) || []
	});

	useEffect(() => {
		localStorage.setItem('Events', JSON.stringify(events))
	}, [events])

// Finances State
	const [ expenses, setExpenses ] = useState(() => {
		return JSON.parse(localStorage.getItem('Expenses')) || []
	});

	useEffect(() => {
		localStorage.setItem('Expenses', JSON.stringify(expenses))
	}, [expenses])

// Medication State
	const [ medications, dispatch ] = useReducer(medicationsReducer, initialState, (initialState) => {
		const localData = localStorage.getItem('Medications');
		return localData ? JSON.parse(localData) : initialState;
	});

	useEffect(() => {
		localStorage.setItem('Medications', JSON.stringify(medications))
	}, [medications])

// Workout State
	const [ workouts, setWorkouts ] = useState(() => {
		return JSON.parse(localStorage.getItem('Workouts')) || []
	});

	useEffect(() => {
		localStorage.setItem('Workouts', JSON.stringify(workouts))
	}, [workouts])

// Calories State
	const [ calories, setCalories ] = useState(() => {
		return JSON.parse(localStorage.getItem('Calories')) || []
	});

	useEffect(() => {
		localStorage.setItem('Calories', JSON.stringify(calories))
	}, [calories])

// Journal State
	const [ journals, setJournals ] = useState(() => {
		return JSON.parse(localStorage.getItem('Journals')) || []
	});

	useEffect(() => {
		localStorage.setItem('Journals', JSON.stringify(journals))
	}, [journals])

// Settings State
	const [ settings, setSettings ] = useState(() => {
		return JSON.parse(localStorage.getItem('Settings')) || []
	});

	useEffect(() => {
		localStorage.setItem('Settings', JSON.stringify(settings))
	}, [settings])

// Trash State
	const [ trash, setTrash ] = useState(() => {
		return JSON.parse(localStorage.getItem('Trash')) || []
	});

	useEffect(() => {
		localStorage.setItem('Trash', JSON.stringify(trash))
	}, [trash])

	const [ isOpen, setIsOpen ] = useState({
		home: true,
		toDoLists: false,
		notes: false,
		calendar: false,
		finances: false,
		medications: false,
		workouts: false,
		calories: false,
		journal: false,
		settings: false,
		trash: false
	});

  	return (
    	<div className={styles.container}>
			<MainNav
				setIsOpen={setIsOpen}
			/>
			<Header
                logo={<Logo className={headerStyles.logo} alt="Home logo" />}
                title="Overview"
            />
			<div className={styles.body}>
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
            <PageMenu />
			<main className={styles.main}>
				<Routes>
					<Route
						path="/"
						element={<HomeComponent
							isOpen={isOpen}
							toDoLists={toDoLists}
							notes={notes}
							events={events}
							expenses={expenses}
							medications={medications}
							workouts={workouts}
							calories={calories}
							journals={journals}
							trash={trash}
						/>}
					/>
					<Route
						path="to-do-lists"
						element={<ToDoListsComponent
							isOpen={isOpen}
							toDoLists={toDoLists}
							setToDoLists={setToDoLists}
						/>}
					/>
					<Route
						path="notes"
						element={<NotesComponent
							isOpen={isOpen}
							notes={notes}
							setNotes={setNotes}
						/>}
					/>
					<Route
						path="calendar"
						element={<CalendarComponent
							isOpen={isOpen}
							events={events}
							setEvents={setEvents}
						/>}
					/>
					<Route
						path="finances"
						element={<FinancesComponent
							isOpen={isOpen}
							expenses={expenses}
							setExpense={setExpenses}
						/>}
					/>
					<Route
						path="medications"
						element={<MedicationComponent
							isOpen={isOpen}
							medications={medications}
							dispatch={dispatch}
						/>}
					/>
					<Route
						path="workouts"
						element={<WorkoutsComponent
							isOpen={isOpen}
							workouts={workouts}
							setWorkouts={setWorkouts}
						/>}
					/>
					<Route
						path="calories"
						element={<CaloriesComponent
							isOpen={isOpen}
							calories={calories}
							setCalories={setCalories}
						/>}
					/>
					<Route
						path="journal"
						element={<JournalComponent
							isOpen={isOpen}
							journals={journals}
							setJournals={setJournals}
						/>}
					/>
					<Route
						path="settings"
						element={<Settings
							isOpen={isOpen}
							settings={settings}
							setSettings={setSettings}
						/>}
					/>
					<Route
						path="trash"
						element={<TrashComponent
							isOpen={isOpen}
							trash={trash}
							setTrash={setTrash}
						/>}
					/>
				</Routes>
			</main>
    	</div>
  	);
}

export default App;
