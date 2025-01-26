import { useState } from 'react';
import {
    Button,
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from '@chakra-ui/react';
import { ReactComponent as DeleteIcon } from '../../assets/delete-item-dash-circle.svg';

const MedicationContentReadOnly = ({
    medication,
    dispatch
}) => {
    const [ dosage, setDosage ] = useState('');
    const [ isDialogOpen, setIsDialogOpen ] = useState(false);
    const [ dialogPosition, setDialogPosition ] = useState({ top: 0, left: 0 });

    const handleDeleteClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setDialogPosition({ top: rect.top - 280, left: rect.left - 170});
        setIsDialogOpen(true);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
    };

    const handleDosageChange = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");
        if (value) {
            const formattedValue = value.slice(0, value.length - 1) + "." + value.slice(-1);
            setDosage(formattedValue);
        } else {
            setDosage("");
        }
    };

    const handleAddDosage = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_DOSAGE', id: medication.id, dosage });
        setDosage('');
    };

    const handleDeleteDosage = (medicationId, dosageId) => {
        dispatch({ type: 'DELETE_DOSAGE', medicationId, dosageId });
    };

    const handleCancelDeleteDosage = () => {
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
        <div as="span" flex='1' textAlign='left'>
            <div className="mapped-grid-headings-3-col">
                <h3>TIME</h3>
                <h3>AMOUNT</h3>
                <h3>DELETE</h3>
            </div>
            {medication.dosage.map((dose) => {
                const currentDate = new Date(dose.time).toDateString();
                const showDateRow = currentDate !== lastDate;
                lastDate = currentDate;

                return (
                    <div key={dose.id}>
                        {showDateRow && (
                            <div className="date-row">
                                <p>{formatDate(dose.time)}</p>
                            </div>
                        )}
                        <div className="mapped-grid-items-3-col" key={dose.id}>
                            <p>{dose.currentTime}</p>
                            <p>{dose.amount}mg</p>
                            <div className="dialog-delete-btn-container">
                                <DialogRoot size="lg" placement="top" isOpen={isDialogOpen} onClose={handleClose}>
                                    <DialogTrigger asChild>
                                        <Button className="dialog-trigger-btn" variant="none" size="sm" onClick={handleDeleteClick}>
                                            <DeleteIcon
                                                className="delete-icons"
                                                alt="Delete item icon"
                                            />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="dialog-content" style={{ position: 'absolute', top: dialogPosition.top, left: dialogPosition.left }}>
                                        <DialogHeader>
                                            <DialogTitle className="dialog-title">Delete Dosage?</DialogTitle>
                                        </DialogHeader>
                                        <DialogBody>
                                            <p className="dialog-text">Are you sure you want to delete this dosage?</p>
                                        </DialogBody>
                                        <DialogFooter>
                                            <DialogActionTrigger asChild>
                                                <Button className="dialog-delete-confirm-btn" variant="outline" onClick={() => handleDeleteDosage(medication.id, dose.id)}>Delete</Button>
                                            </DialogActionTrigger>
                                            <DialogCloseTrigger asChild>
                                                <Button className="dialog-delete-cancel-btn" onClick={handleCancelDeleteDosage}>Cancel</Button>
                                            </DialogCloseTrigger>
                                        </DialogFooter>
                                        <DialogCloseTrigger />
                                    </DialogContent>
                                </DialogRoot>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="accordion-readOnly-content-section">
                <form className="accordion-one-btn-form" onSubmit={handleAddDosage}>
                    <input
                        type="text"
                        inputMode="numeric"
                        name="dosage"
                        className="accordion-one-btn-form-input"
                        placeholder="Enter mg"
                        value={dosage}
                        onChange={handleDosageChange}
                    />
                    {dosage <= 0 || dosage === '' ? (
                        <button type="button" className="accordion-one-btn-form-btn disabled">
                            Add
                        </button>
                    ) : (
                        <button type="submit" className="accordion-one-btn-form-btn">
                            Add
                        </button>
                    )}
                </form>
            </div>
        </div>
    )
}

export default MedicationContentReadOnly;