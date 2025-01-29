import { useState, useRef } from 'react';
import styles from './AccordionCardAdd.module.css';
import { ReactComponent as AddIcon } from '../../../assets/add-item.svg';

const AccordionCardAdd = ({
    dispatch,
    addItemInput,
    setAddItemInput
}) => {
    const [ isAddingItem, setIsAddingItem ] = useState(false);
    const clearFormInput = useRef("");

    const handleFormChange = (e) => {
        setAddItemInput({
            ...addItemInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TITLE', title: addItemInput.title });
        setIsAddingItem(false);
    };

    return (
        <article className={styles.container}>
            {isAddingItem ? (
                <div className={styles.item}>
                    <h2 className={styles.h2}>
                        <div className={styles.titleContainer}>
                            <div>
                                <form className={styles.form} onSubmit={handleFormSubmit}>
                                    <input
                                        className={`${styles.formInput}`}
                                        type="text"
                                        name="title"
                                        placeholder="Enter name..."
                                        ref={clearFormInput}
                                        onChange={handleFormChange}
                                    />
                                    <button
                                        className={`${styles.formBtns} ${styles.left}`}
                                        type="submit"
                                    >
                                        Add
                                    </button>
                                    <button
                                        className={`${styles.formBtns} ${styles.right}`}
                                        type="button"
                                        onClick={() => setIsAddingItem(false)}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </h2>
                </div>
            ) : (
                <div className={styles.addBtnContainer}>
                    <button
                        onClick={() => setIsAddingItem(true)}
                    >
                        <div className={styles.addBtnWrapper}>
                            <p className={styles.addBtnLabel}>Add New</p>
                            <AddIcon className={styles.addBtn} />
                        </div>
                    </button>
                </div>
            )}
        </article>
    )
}

export default AccordionCardAdd;