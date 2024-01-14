import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const ModalDeleteUser = ({confirmOpen, handleConfirmClose, handleDelete, selectedRow}) => {

    return (
        <Dialog
            open={confirmOpen}
            onClose={handleConfirmClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirm Delete User"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirmClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    handleDelete(selectedRow); // Thêm hàm handleDelete
                    handleConfirmClose();
                }} color="primary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>

    )
}

export default ModalDeleteUser
