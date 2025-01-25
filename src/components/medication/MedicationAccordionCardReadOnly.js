import { Box } from '@chakra-ui/react';
import { ReactComponent as EditIcon } from '../../assets/edit-item.svg';
import { ReactComponent as DeleteIcon } from '../../assets/trash.svg';

const MedicationAccordionCardReadOnly = ({
    medication,
    handleEditItemClick,
    handleDeleteItemClick
}) => {

    return (
        <Box className="accordion-card-readOnly-section-heading" as="span" flex='1' textAlign='left'>
            <div className="accordion-card-readOnly-title">
                <h2>{medication.title}</h2>
            </div>
            <div className="accordion-card-readOnly-btns">
                <button type="button" onClick={(e) => handleEditItemClick(e, medication.id)}>
                    <EditIcon className="accordion-card-readOnly-btn-icons" alt="Edit item icon" />
                </button>
                <button type="button" onClick={(e) => handleDeleteItemClick(e, medication.id)}>
                    <DeleteIcon className="accordion-card-readOnly-btn-icons" alt="Delete item icon" />
                </button>
            </div>
        </Box>
    )
}


export default MedicationAccordionCardReadOnly;