import { useState, useReducer, useEffect } from 'react';
import styles from './ToDoListsComponent.module.css';
import Header from '../app/Header.js';
import { ReactComponent as Logo } from '../../assets/todo-list.svg';
import ToDoCard from './ToDoCard';
import { ReactComponent as DeleteIcon } from '../../assets/delete-item-dash-circle.svg';

const taskReducer = (toDoTasks, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...toDoTasks, {
                id: Date.now(),
                text: action.toDoText,
                completed: false }
            ];
        case 'TOGGLE_TASK':
            return toDoTasks.map(toDoTask =>
                toDoTask.id === action.id ? { ...toDoTask, completed: !toDoTask.completed } : toDoTask
            );
        case 'DELETE_TASK':
            return toDoTasks.filter(toDoTask => toDoTask.id !== action.id);
        default:
            return toDoTasks;
    }
}

const ToDoListsComponent = ({ toDoLists, setToDoLists, isOpen }) => {
// States
	const [ toDoTitle, setToDoTitle ] = useState(() => {
		return JSON.parse(localStorage.getItem('ToDoListTitle')) || ''
	});

		useEffect(() => {
			localStorage.setItem('ToDoListTitle', JSON.stringify(toDoTitle))
		}, [toDoTitle])

	const [ toDoText, setToDoText ] = useState(() => {
		return JSON.parse(localStorage.getItem('ToDoListAddtask')) || ''
	});

		useEffect(() => {
			localStorage.setItem('ToDoListAddTask', JSON.stringify(toDoText))
		}, [toDoText])

    const [ toDoTasks, dispatch ] = useReducer(taskReducer, [], () => {
        const localData = localStorage.getItem('ToDoListTasks');
        return localData ? JSON.parse(localData) : []
    });

        useEffect(() => {
            localStorage.setItem('ToDoListTasks', JSON.stringify(toDoTasks))
        }, [toDoTasks]);

// Handle Functions
    const handleAddTask = () => {
        if (toDoText.trim() !== '') {
            dispatch({ type: 'ADD_TASK', toDoText });
            setToDoText('');
        }
    }

    const handleToggleTask = id => {
        dispatch({ type: 'TOGGLE_TASK', id });
    }

    const handleDeleteTask = id => {
        dispatch({ type: 'DELETE_TASK', id });
    }

    const handleSaveList = () => {
        const newTaskList = [...toDoLists, {
            id: Date.now(),
            title: toDoTitle,
            date: new Date(),
            list: toDoTasks
        }];
        setToDoLists(newTaskList);
    }

    return (
        <div className={`page-container ${isOpen.toDoLists ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="To-do lists logo" />}
                title="To-Do Lists"
            />
            <section className="sidebar-page-layout">
                <div className="page-sidebar">
                    <button className="add-item-sidebar-btn" type="button">New List</button>
                    <div className="page-sidebar-item-list">
                        {toDoLists.sort((a, b) => {
                            return b.date - a.date;
                        })
                        .map((tasklist) => (
                            <ToDoCard
                                toDoLists={toDoLists}
                                setToDoLists={setToDoLists}
                                title={tasklist.title}
                                date={tasklist.date}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <article className={styles.mainContainer}>
                <button type="button" onClick={handleSaveList}>Save List</button>
                <h2>
                    <input
                        className={styles.listTitle}
                        type="text"
                        placeholder="Enter a title..."
                        value={toDoTitle}
                        onChange={e => setToDoTitle(e.target.value)}
                    />
                </h2>
                <ul>
                    {toDoTasks.map(toDoTask => (
                        <li key={toDoTask.id} className={styles.listItems}>
                            <input
                                className={styles.checkbox}
                                type="checkbox"
                                checked={toDoTask.completed}
                                onChange={() => handleToggleTask(toDoTask.id)}
                            />
                            <span className={styles.listItemsText} style={{ textDecoration: toDoTask.completed ? 'line-through' : 'none' }}>
                                {toDoTask.text}
                            </span>
                            <button className={styles.listItemsDeleteBtn} onClick={() => handleDeleteTask(toDoTask.id)}>
                                <DeleteIcon className="delete-icons action-icons" alt="Delete icon" />
                            </button>
                        </li>
                    ))}
                </ul>
                <input
                    className={styles.addItemInput}
                    type="text"
                    placeholder="Add a new task..."
                    value={toDoText}
                    onChange ={e => setToDoText(e.target.value)}
                />
                <button className={`button ${styles.addItemBtn}`} onClick={handleAddTask}>Add a Task</button>
            </article>
        </div>
    )
}

export default ToDoListsComponent;