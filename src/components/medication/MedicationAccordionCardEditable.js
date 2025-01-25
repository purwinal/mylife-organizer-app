import { Box } from '@chakra-ui/react';

const MedicationAccordionCardEditable = ({
    editFormData,
    handleEditItemFormChange,
    handleCancelItemClick,
    handleEditItemFormSubmit
}) => {
    const handleOnClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Box as="span" flex='1' textAlign='left'>
            <form className="accordion-two-btn-form" onSubmit={handleEditItemFormSubmit}>
                <input
                    className="accordion-two-btn-form-input"
                    type="text"
                    name="title"
                    placeholder="Enter medication name..."
                    value={editFormData.title}
                    onChange={handleEditItemFormChange}
                    onClick={handleOnClick}
                />
                <button
                    className="accordion-two-btn-form-btns btnLeft"
                    type="submit"
                    onClick={handleOnClick}
                >
                    Save
                </button>
                <button
                    className="accordion-two-btn-form-btns btnRight"
                    type="button"
                    onClick={(e) => handleCancelItemClick(e)}
                >
                    Cancel
                </button>
            </form>
        </Box>
    )
}

export default MedicationAccordionCardEditable;