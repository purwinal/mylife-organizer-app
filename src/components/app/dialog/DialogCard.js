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

const DialogCard = () => {
    return (
        <DialogRoot size="cover" placement="center">
            <DialogTrigger asChild>
                <Button type="button" className="dialog-trigger-btn" variant="none" size="sm">
                    <DeleteIcon
                        className="accordion-card-readOnly-btn-icons delete-accordion-icons"
                        alt="Delete item icon"
                    />
                </Button>
            </DialogTrigger>
            <DialogContent className="dialog-content">
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
                        <Button className="dialog-delete-cancel-btn">Cancel</Button>
                    </DialogCloseTrigger>
                </DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}

export default DialogCard;