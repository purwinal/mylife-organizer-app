import { useState } from 'react';
import {
    Box,
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
import { ReactComponent as EditIcon } from '../../assets/edit-item.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash.svg';

const MedicationAccordionCardReadOnly = ({
    medication,
    dispatch,
    handleEditItemClick,
    handleDeleteItemClick
}) => {
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

    return (
        <Box className="accordion-card-readOnly-section-heading" as="span" flex='1' textAlign='left'>
            <div className="accordion-card-readOnly-title">
                <h2>{medication.title}</h2>
            </div>
            <div className="accordion-card-readOnly-btns">
                <button type="button" onClick={(e) => handleEditItemClick(e, medication.id)}>
                    <EditIcon className="accordion-card-readOnly-btn-icons" alt="Edit item icon" />
                </button>
                <div className="dialog-delete-btn-container">
                    <DialogRoot size="lg" placement="top" isOpen={isDialogOpen} onClose={handleClose}>
                        <DialogTrigger asChild>
                            <Button type="button" className="dialog-trigger-btn" variant="none" size="sm" onClick={handleDeleteClick}>
                                <DeleteIcon
                                    className="accordion-card-readOnly-btn-icons delete-accordion-icons"
                                    alt="Delete item icon"
                                />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="dialog-content" style={{ position: 'absolute', top: dialogPosition.top, left: dialogPosition.left }}>
                            <DialogHeader>
                                <DialogTitle className="dialog-title">Delete Medication?</DialogTitle>
                            </DialogHeader>
                            <DialogBody>
                                <p className="dialog-text">Are you sure you want to delete this medication?</p>
                            </DialogBody>
                            <DialogFooter>
                                <DialogActionTrigger asChild>
                                    <Button className="dialog-delete-confirm-btn" variant="outline" onClick={(e) => handleDeleteItemClick(e, medication.id)}>Delete</Button>
                                </DialogActionTrigger>
                                <DialogCloseTrigger asChild>
                                    <Button className="dialog-delete-cancel-btn" onClick={handleClose}>Cancel</Button>
                                </DialogCloseTrigger>
                            </DialogFooter>
                        </DialogContent>
                    </DialogRoot>
                </div>
            </div>
        </Box>
    )
}


export default MedicationAccordionCardReadOnly;