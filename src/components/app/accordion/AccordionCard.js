import { useState } from 'react';
import styles from './AccordionCard.module.css';
import AccordionCardEditable from './AccordionCardEditable';
import AccordionCardReadOnly from './AccordionCardReadOnly';
import AccordionCardAdd from './AccordionCardAdd';
import componentMapping from '../componentMapping';

const AccordionCard = ({
    array,
    dispatch,
    isAddingItem,
    setIsAddingItem,
    addItemInput,
    setAddItemInput,
    editItemInput,
    setEditItemInput,
    editItemId,
    setEditItemId,
    contentTitle
}) => {

    const [ selected, setSelected ] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }

    const ContentComponent = componentMapping[contentTitle];

    return (
        <div className={styles.container}>
            {array.map((item, index) => {
                const isLastItem = index === array.length - 1;
                const itemClass = `${styles.item} ${isLastItem && selected !== item.id && !isAddingItem ? styles.lastItemClosed : ''}`;
                return (
                    <div
                        className={itemClass}
                        key={item.id}
                    >
                        <div className={styles.title} onClick={() => toggle(item.id)}>
                            { editItemId === item.id ? (
                                <AccordionCardEditable
                                    dispatch={dispatch}
                                    editItemInput={editItemInput}
                                    setEditItemInput={setEditItemInput}
                                    editItemId={editItemId}
                                    setEditItemId={setEditItemId}
                                    isArrayEmpty={array.length === 0}
                                />
                            ) : (
                                <AccordionCardReadOnly
                                    array={array}
                                    item={item}
                                    dispatch={dispatch}
                                    setEditItemInput={setEditItemInput}
                                    setEditItemId={setEditItemId}
                                    selected={selected}
                                    index={item.id}
                                    isArrayEmpty={array.length === 0}
                                />
                            )}
                        </div>
                        <div className={`${selected === item.id ? styles.contentShow : styles.content} ${isLastItem && selected === item.id ? styles.lastItemContent : ''}`}>
                            {ContentComponent && <ContentComponent
                                item={item}
                                dispatch={dispatch}
                            /> }
                        </div>
                    </div>
                );
            })}
            <AccordionCardAdd
                dispatch={dispatch}
                addItemInput={addItemInput}
                setAddItemInput={setAddItemInput}
                isAddingItem={isAddingItem}
                setIsAddingItem={setIsAddingItem}
                isArrayEmpty={array.length === 0}
            />
        </div>
    )
}

export default AccordionCard;