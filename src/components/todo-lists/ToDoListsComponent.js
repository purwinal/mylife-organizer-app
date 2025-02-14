import { useState, useReducer, useEffect } from 'react';
import styles from './ToDoListsComponent.module.css';
import headerStyles from '../app/Header.module.css';
import taskReducer from '../../reducers/taskReducer.js';
import Header from '../app/Header.js';
import ToDoCardAdd from './ToDoCardAdd.js';
import PageMenu from '../app/pageMenu/PageMenu.js';
import { ReactComponent as Logo } from '../../assets/todo-list.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete-item-dash-circle.svg';

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

    const [ isAddingItem, setIsAddingItem ] = useState(false);

// Handle Functions
    const handleToggleTask = id => {
        dispatch({ type: 'TOGGLE_TASK', id });
    }

    const handleDeleteTask = id => {
        dispatch({ type: 'DELETE_TASK', id });
    }

    return (
        <section className={`${styles.container} ${isOpen.toDoLists ? styles.open : styles.closed}`}>
            <Header
                logo={<Logo className={headerStyles.logo} alt="To-do lists logo" />}
                title="To-Do Lists"
            />
            <div className={styles.body}>
                <h2 className={styles.titleContainer}>
                    <input
                        className={styles.title}
                        type="text"
                        placeholder="Enter a title..."
                        value={toDoTitle}
                        onChange={e => setToDoTitle(e.target.value)}
                    />
                </h2>
                <ul className={styles.list}>
                    {toDoTasks.map(toDoTask => (
                        <li key={toDoTask.id} className={styles.items}>
                            <div className={styles.itemText}>
                                <input
                                    className={styles.checkbox}
                                    type="checkbox"
                                    checked={toDoTask.completed}
                                    onChange={() => handleToggleTask(toDoTask.id)}
                                />
                                <span className={`${styles.text} ${toDoTask.completed ? styles.lineThrough : ''} `}>
                                    {toDoTask.text}
                                </span>
                            </div>
                            <button className={styles.listItemsDeleteBtn} onClick={() => handleDeleteTask(toDoTask.id)}>
                                <DeleteIcon className={styles.btnIcons} alt="Delete icon" />
                            </button>
                        </li>
                    ))}
                </ul>
                <ToDoCardAdd
                    dispatch={dispatch}
                    toDoText={toDoText}
                    setToDoText={setToDoText}
                />
                <PageMenu
                    setIsAddingItem={setIsAddingItem}
                />
            </div>
        </section>
    )
}

export default ToDoListsComponent;