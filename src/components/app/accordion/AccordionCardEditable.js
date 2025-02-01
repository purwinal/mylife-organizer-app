import styles from './AccordionCardEditable.module.css';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Cancel } from '../../../assets/x.svg';

const AccordionCardEditable = ({
    dispatch,
    editItemInput,
    setEditItemInput,
    editItemId,
    setEditItemId
}) => {

    const handleOnClick = (e) => {
        e.stopPropagation();
    };

    const handleCancelClick = (e) => {
        e.stopPropagation();
        setEditItemId(null);
    };

    const handleFormChange = (e) => {
        setEditItemInput({
            ...editItemInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'EDIT_TITLE', id: editItemId, title: editItemInput.title });
        setEditItemId(null);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input
                    className={styles.formInput}
                    type="text"
                    name="title"
                    placeholder="Enter name..."
                    value={editItemInput.title}
                    onChange={handleFormChange}
                    onClick={handleOnClick}
                />
                <button
                    className={`${styles.formBtns} ${styles.left}`}
                    type="submit"
                    onClick={handleOnClick}
                >
                    <Check
                        className={styles.btnIcons}
                        alt="Check icon"
                    />
                </button>
                <button
                    className={`${styles.formBtns} ${styles.right}`}
                    type="button"
                    onClick={(e) => handleCancelClick(e)}
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

export default AccordionCardEditable;