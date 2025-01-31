import { useRef } from 'react';
import styles from './AccordionCardAdd.module.css';
import { ReactComponent as UpArrow } from '../../../assets/chevron-wide-up.svg';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Cancel } from '../../../assets/x.svg';


const AccordionCardAdd = ({
    dispatch,
    addItemInput,
    setAddItemInput,
    isAddingItem,
    setIsAddingItem,
    isArrayEmpty
}) => {

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

    if (!isAddingItem && isArrayEmpty) {
        return (
            <div className={styles.textContainer}>
                <h2 className={styles.textHeading}>You haven't added any items yet.</h2>
                <div className={styles.subTextContainer}>
                    <p className={styles.text}>To get started:</p>
                    <div className={styles.indentedTextContainer}>
                        <p className={styles.inlineText}>
                            1. Click on the "<UpArrow class={styles.inlineIcon} />" icon at the bottom of the screen.
                        </p>
                        <p className={styles.inlineText}>
                            2. Then, click on "<span className={styles.coloredText}>Add Item</span>".
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (!isAddingItem) {
        return null;
    }

    return (
        <article className={styles.container}>
            <div className={styles.item}>
                <h2 className={styles.h2}>
                    <div className={`${styles.titleContainer} ${isArrayEmpty ? styles.fullBorderRadius : styles.bottomBorderRadius}`}>
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
                                onClick={() => setIsAddingItem(false)}
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
                </h2>
            </div>
        </article>
    )
}

export default AccordionCardAdd;