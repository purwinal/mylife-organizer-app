import styles from './AccordionCardReadOnly.module.css';
import { ReactComponent as EditIcon } from '../../../assets/edit-item.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/trash.svg';
import { ReactComponent as ChevronDown }  from '../../../assets/chevron-down.svg';
import { ReactComponent as ChevronUp }  from '../../../assets/chevron-up.svg';

const AccordionCardReadOnly = ({
    array,
    item,
    dispatch,
    setEditItemInput,
    setEditItemId,
    selected,
    index
}) => {

    const handleEditClick = (e, id) => {
        e.stopPropagation();
        const itemToEdit = array.find((item) => item.id === id);
        setEditItemInput({ title: itemToEdit.title });
        setEditItemId(id);
    };

    const handleDeleteClick = (e, id) => {
        e.stopPropagation();
        dispatch({ type: 'DELETE_TITLE', id });
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{item.title}</h2>
            </div>
            <div className={styles.btns}>
                <button type="button" onClick={(e) => handleEditClick(e, item.id)}>
                    <EditIcon className={styles.btnIcons} alt="Edit item icon" />
                </button>
                <button type="button" onClick={(e) => handleDeleteClick(e, item.id)}>
                    <DeleteIcon
                        className={styles.btnIcons}
                        alt="Delete item icon"
                    />
                </button>
                <span>{selected === index ? <ChevronUp /> : <ChevronDown />}</span>
            </div>
        </div>
    )
}

export default AccordionCardReadOnly;