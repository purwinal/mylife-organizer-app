import { useState } from 'react';
import styles from './MedicineContent.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/delete-item-dash-circle.svg';
import { ReactComponent as Check } from '../../assets/check.svg';

const MedicineContent = ({
    item,
    dispatch
}) => {
    const [ dosage, setDosage ] = useState('');

    const handleFormChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value) {
            const formattedValue = value.slice(0, value.length - 1) + "." + value.slice(-1);
            setDosage(formattedValue);
        } else {
            setDosage("");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_DOSAGE', id: item.id, dosage });
        setDosage('');
    };

    const handleDeleteClick = (medicationId, dosageId) => {
        dispatch({ type: 'DELETE_DOSAGE', medicationId, dosageId });
    };

    const handleCancelClick = () => {
        dispatch({ type: 'CANCEL_DELETE_DOSAGE' });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    let lastDate = null;

    return (
        <div className={styles.container}>
            <div className={styles.gridHeadings3Col}>
                <h3>Time</h3>
                <h3>Amount</h3>
                <h3>Delete</h3>
            </div>
            <div className={styles.gridItemsContainer}>
                {item.dosage.map((dose) => {
                    const currentDate = new Date(dose.time).toDateString();
                    const showDateRow = currentDate !== lastDate;
                    lastDate = currentDate;

                    return (
                        <div key={dose.id}>
                            {showDateRow && (
                                <div className={styles.dateRow}>
                                    <p className={styles.dateRowText}>{formatDate(dose.time)}</p>
                                </div>
                            )}
                            <div className={styles.gridItems3Col} key={dose.id}>
                                <p>{dose.currentTime}</p>
                                <p>{dose.amount}mg</p>
                                <p>
                                    <button className={styles.deleteBtn} onClick={() => handleDeleteClick(item.id, dose.id)}>
                                        <DeleteIcon
                                            className={styles.deleteBtnIcon}
                                            alt="Delete item icon"
                                        />
                                    </button>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.contentSection}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        inputMode="numeric"
                        name="dosage"
                        className={styles.formInput}
                        placeholder="mg"
                        value={dosage}
                        onChange={handleFormChange}
                    />
                    {dosage <= 0 || dosage === '' ? (
                        <button type="button" className={`${styles.formBtns} ${styles.disabled}`}>
                            <div className={styles.btns}>
                                <Check
                                    className={styles.btnIcons}
                                    alt="Check icon"
                                />
                            </div>
                        </button>
                    ) : (
                        <button type="submit" className={styles.formBtns}>
                            <div className={styles.btns}>
                                <Check
                                    className={styles.btnIcons}
                                    alt="Check icon"
                                />
                            </div>
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default MedicineContent;