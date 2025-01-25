import styles from './ToDoCard.module.css';

const ToDoCard = ({ toDoLists, setToDoLists, title, date }) => {
    const handleTasksListDeleteClick = (listId) => {
        const newTaskList = [...toDoLists];
        const index = toDoLists.findIndex((list) => list.id !== listId);
        newTaskList.splice(index, 1);
        setToDoLists(newTaskList);
    }

    return (
        <article className={`${styles.listItem} ${styles.listItemSelected}`}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <p className={styles.itemUpdated}>{date}</p>
            <button className={styles.itemDeleteBtn} type="button" onClick={handleTasksListDeleteClick}>Delete List</button>
        </article>
    )
}

export default ToDoCard;