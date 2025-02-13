import { useState, useRef, useEffect, useMemo } from 'react';
import styles from './MedicineContent.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/delete-item-dash-circle.svg';
import { ReactComponent as Check } from '../../assets/check.svg';

const MedicineContent = ({
    item,
    dispatch
}) => {
    const [ dosage, setDosage ] = useState('');
    const [ qty, setQty ] = useState('');
    const [ inputType, setInputType ] = useState('mg');
    const [ timeType, setTimeType ] = useState('AM');
    const [ itemAdded, setItemAdded] = useState(false);
    const [ timeInput, setTimeInput ] = useState('');
    const lastItemRef = useRef(null);

    const handleDosageChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value) {
            const formattedValue = value.slice(0, value.length - 1) + "." + value.slice(-1);
            setDosage(formattedValue);
        } else {
            setDosage("");
        }
    };

    const handleQtyChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        setQty(value);
    };

    const handleTimeChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value) {
            const formattedValue = value.slice(0, value.length -2) + ":" + value.slice(-2);
            setTimeInput(formattedValue);
        } else {
            setTimeInput("");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const today = new Date();
        let hours = timeInput ? parseInt(timeInput.split(':')[0]) : today.getHours();
        const minutes = timeInput ? parseInt(timeInput.split(':')[1]) : today.getMinutes();

        if (timeType === 'PM' && hours < 12) {
            hours += 12;
        } else if (timeType === 'AM' && hours === 12) {
            hours = 0;
        }

        const formattedTime = timeInput ? `${timeInput} ${timeType}` : today.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const timeInMinutes = hours * 60 + minutes;

        if (inputType === 'mg') {
            dispatch({ type: 'ADD_DOSAGE', id: item.id, dosage, formattedTime, timeInMinutes });
            setDosage('');
        } else if (inputType === 'qty') {
            dispatch({ type: 'ADD_QTY', id: item.id, qty, formattedTime, timeInMinutes });
            setQty('');
        }
        setItemAdded(true);
        setTimeInput('');
        setTimeType('AM');
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

    useEffect(() => {
        if (itemAdded && lastItemRef.current) {
            lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
            setItemAdded(false);
        }
    }, [itemAdded]);

    const sortedDosages = useMemo(() => {
        return item.dosage.sort((a, b) => a.timeInMinutes - b.timeInMinutes);
    }, [item.dosage]);

    let lastDate = null;

    return (
        <div className={styles.container}>
            <div className={styles.gridHeadings3Col}>
                <h3>Time</h3>
                <h3>Amount</h3>
                <h3>Delete</h3>
            </div>
            <div className={styles.gridItemsContainer}>
                {sortedDosages.map((dose, index) => {
                    const currentDate = new Date(dose.time).toDateString();
                    const showDateRow = currentDate !== lastDate;
                    lastDate = currentDate;

                    return (
                        <div key={dose.id} ref={index === item.dosage.length - 1 ? lastItemRef : null}>
                            {showDateRow && (
                                <div className={styles.dateRow}>
                                    <p className={styles.dateRowText}>{formatDate(dose.time)}</p>
                                </div>
                            )}
                            <div className={`${styles.gridItems3Col} ${index < sortedDosages.length - 1 && new Date(sortedDosages[index + 1].time).toDateString() !== currentDate ? styles.noBottomBorder : ''}`} key={dose.id}>
                                <p>{dose.currentTime}</p>
                                <p>{dose.amount}</p>
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
                    )
                })}
            </div>
            <div className={styles.contentSection}>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div className={styles.inputContainer}>
                        <select
                            name="timeType"
                            className={styles.formSelect}
                            value={timeType}
                            onChange={(e) => setTimeType(e.target.value)}
                        >
                            <option className={styles.option} value="AM">AM (Optional)</option>
                            <option className={styles.option} value="PM">PM (Optional)</option>
                        </select>
                        <input
                            type="text"
                            inputMode="numeric"
                            name="time"
                            className={styles.formInput}
                            placeholder="Optional"
                            value={timeInput}
                            onChange={handleTimeChange}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <select
                            name="inputType"
                            className={styles.formSelect}
                            value={inputType}
                            onChange={(e) => setInputType(e.target.value)}
                        >
                            <option className={styles.option} value="mg">mg</option>
                            <option className={styles.option} value="qty">Qty</option>
                        </select>
                        {inputType === 'mg' ? (
                            <>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    name="dosage"
                                    className={styles.formInput}
                                    placeholder="mg"
                                    value={dosage}
                                    onChange={handleDosageChange}
                                />
                            </>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    name="qty"
                                    className={styles.formInput}
                                    placeholder="Qty"
                                    value={qty}
                                    onChange={handleQtyChange}
                                />
                            </>
                        )}
                    </div>
                    <div className={styles.formBtnContainer}>
                        {inputType === 'mg' ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                {qty <= 0 || qty === '' ? (
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
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MedicineContent;