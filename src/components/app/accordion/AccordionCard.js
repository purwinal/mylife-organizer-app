import { useState } from 'react';
import styles from './AccordionCard.module.css';
import AccordionCardEditable from './AccordionCardEditable';
import AccordionCardReadOnly from './AccordionCardReadOnly';
import AccordionCardAdd from './AccordionCardAdd';
import componentMapping from '../componentMapping';

const AccordionCard = ({
    array,
    dispatch,
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
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {array.map((item, index) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.title} onClick={() => toggle(item.id)}>
                            { editItemId === item.id ? (
                                <AccordionCardEditable
                                    dispatch={dispatch}
                                    editItemInput={editItemInput}
                                    setEditItemInput={setEditItemInput}
                                    editItemId={editItemId}
                                    setEditItemId={setEditItemId}
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
                                />
                            )}
                        </div>
                        <div className={selected === item.id ? styles.contentShow : styles.content}>
                            {ContentComponent && <ContentComponent
                                item={item}
                                dispatch={dispatch}

                            /> }
                        </div>
                    </div>
                ))}
                <AccordionCardAdd
                    dispatch={dispatch}
                    addItemInput={addItemInput}
                    setAddItemInput={setAddItemInput}
                />
            </div>
        </div>
    )
}

export default AccordionCard;