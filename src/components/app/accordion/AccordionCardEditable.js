import styles from './AccordionCardEditable.module.css';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Cancel } from '../../../assets/x.svg';

const AccordionCardEditable = ({
    dispatch,
    editItemInput,
    setEditItemInput,
    editItemId,
    setEditItemId,
    isArrayEmpty
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
                    <div className={styles.btns}>
                        <Check
                            className={styles.btnIcons}
                            alt="Check icon"
                        />
                    </div>
                </button>
                <button
                    className={`${styles.formBtns} ${styles.right}`}
                    type="button"
                    onClick={(e) => handleCancelClick(e)}
                >
                    <div className={styles.btns}>
                        <Cancel
                            className={styles.btnIcons}
                            alt="Cancel icon"
                        />
                    </div>
                </button>
            </form>
        </div>
    )
}

export default AccordionCardEditable;