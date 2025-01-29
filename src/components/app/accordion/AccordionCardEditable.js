import styles from './AccordionCardEditable.module.css';

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
        <div>
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
                    Save
                </button>
                <button
                    className={`${styles.formBtns} ${styles.right}`}
                    type="button"
                    onClick={(e) => handleCancelClick(e)}
                >
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default AccordionCardEditable;