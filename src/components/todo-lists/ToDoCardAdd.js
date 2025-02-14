import styles from './ToDoCardAdd.module.css';
import { ReactComponent as Check } from '../../assets/check.svg';

const ToDoCardAdd = ({
    dispatch,
    toDoText,
    setToDoText
}) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (toDoText.trim() !== '') {
            dispatch({ type: 'ADD_TASK', toDoText });
            setToDoText('');
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Add a new item..."
                    value={toDoText}
                    onChange ={e => setToDoText(e.target.value)}
                />
                <button
                    className={`${styles.formBtns}`}
                    type="submit"
                >
                    <Check
                        className={styles.btnIcons}
                        alt="Check icon"
                    />
                </button>
            </form>
        </div>
    )
}

export default ToDoCardAdd;