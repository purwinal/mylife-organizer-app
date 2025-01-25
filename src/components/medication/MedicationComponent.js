import { useState, useRef } from 'react';
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from '@chakra-ui/react';
import Header from '../app/Header.js';
import MedicationAccordionCardReadOnly from './MedicationAccordionCardReadOnly';
import MedicationAccordionCardEditable from './MedicationAccordionCardEditable';
import MedicationContentReadOnly from './MedicationContentReadOnly';
import PageNav from '../app/PageNav.js';
import { ReactComponent as Logo } from '../../assets/medication.svg';
import { ReactComponent as AddIcon } from '../../assets/add-item.svg';

const MedicationComponent = ({ medications, dispatch, isOpen }) => {
    const [ isAddingItem, setIsAddingItem ] = useState(false);
    const [ editAccordionItemId, setEditAccordionItemId ] = useState(null);
    const [ editFormData, setEditFormData ] = useState({ title: '', dosage: '' });
    const [ addFormData, setAddFormData ] = useState({ title: '', dosage: '' });

    const clearFormData = useRef("");

// Handle Functions
    const handleAddItemFormChange = (e) => {
        setAddFormData({
            ...addFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddItemFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TITLE', title: addFormData.title });
        setIsAddingItem(false);
    };

    const handleEditItemFormChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditItemFormSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'EDIT_TITLE', id: editAccordionItemId, title: editFormData.title });
        setEditAccordionItemId(null);
    };

    const handleEditItemClick = (e, id) => {
        e.stopPropagation();
        const medicationToEdit = medications.find((medication) => medication.id === id);
        setEditFormData({ title: medicationToEdit.title });
        setEditAccordionItemId(id);
    };

    const handleCancelItemClick = (e) => {
        e.stopPropagation();
        setEditAccordionItemId(null);
    };

    const handleDeleteItemClick = (e, id) => {
        e.stopPropagation();
        dispatch({ type: 'DELETE_TITLE', id });
    };

    return (
        <section className={`page-container ${isOpen.medications ? "open" : "closed"}`}>
            <Header
                logo={<Logo className="header-logo" alt="Medication logo" />}
                title="Medication"
            />
            <AccordionRoot className="accordion-main" collapsible defaultValue={["0"]}>
                {medications.map((medication, index) => (
                    <AccordionItem className="accordion-item" key={medication.id} value={medication.value}>
                        <AccordionItemTrigger className="accordion-section-heading-container">
                            { editAccordionItemId === medication.id ? (
                                <MedicationAccordionCardEditable
                                    medication={medication}
                                    editFormData={editFormData}
                                    handleEditItemFormChange={handleEditItemFormChange}
                                    handleCancelItemClick={handleCancelItemClick}
                                    handleEditItemFormSubmit={handleEditItemFormSubmit}
                                />
                            ) : (
                                <MedicationAccordionCardReadOnly
                                    medication={medication}
                                    handleEditItemClick={handleEditItemClick}
                                    handleDeleteItemClick={handleDeleteItemClick}
                                />
                            )}
                        </AccordionItemTrigger>
                        <AccordionItemContent className="accordion-content-section" pb={4}>
                                <MedicationContentReadOnly
                                    medication={medication}
                                    dispatch={dispatch}
                                />
                        </AccordionItemContent>
                    </AccordionItem>
                ))}
                <article>
                    {isAddingItem ? (
                        <div className="accordion-item">
                            <h2>
                                <div className="accordion-section-heading-container">
                                    <div as="span" flex='1' textAlign='left'>
                                        <form className="accordion-two-btn-form" onSubmit={handleAddItemFormSubmit}>
                                            <input
                                                className="accordion-two-btn-form-input add-item"
                                                type="text"
                                                name="title"
                                                placeholder="Enter Medication..."
                                                ref={clearFormData}
                                                onChange={handleAddItemFormChange}
                                            />
                                            <button
                                                className="accordion-two-btn-form-btns btnLeft add-item"
                                                type="submit"
                                            >
                                                Add
                                            </button>
                                            <button
                                                className="accordion-two-btn-form-btns btnRight add-item"
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
                        <div className="addBtnContainer">
                            <button
                                className="action-icons accordion-new-item-btn"
                                onClick={() => setIsAddingItem(true)}
                            >
                                <div>
                                    <p className="addBtn-label">Add New</p>
                                    <AddIcon className="addBtn" />
                                </div>
                            </button>
                        </div>
                    )}
                </article>
            </AccordionRoot>
            <PageNav
            
            />
        </section>
    )
}

export default MedicationComponent;