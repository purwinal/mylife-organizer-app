import styles from './ToDoCardAdd.module.css';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cancel } from '../../assets/x.svg';

const ToDoCardAdd = ({
    dispatch,
    toDoText,
    setToDoText,
    setIsAddingItem
}) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (toDoText.trim() !== '') {
            dispatch({ type: 'ADD_TASK', toDoText });
            setToDoText('');
            setIsAddingItem(false);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Add a new task..."
                    value={toDoText}
                    onChange ={e => setToDoText(e.target.value)}
                />
                <button
                    className={`${styles.formBtns} ${styles.left}`}
                    type="submit"
                >
                    <Check
                        className={styles.btnIcons}
                        alt="Check icon"
                    />
                </button>
                <button
                    className={`${styles.formBtns} ${styles.right}`}
                    type="button"
                    onClick={() => setIsAddingItem(false)}
                >
                    <Cancel
                        className={styles.btnIcons}
                        alt="Cancel icon"
                    />
                </button>
            </form>
        </div>
    )
}

export default ToDoCardAdd;