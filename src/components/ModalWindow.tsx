import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {UserType} from "../dal/api";


type ModalWindowType = {
    user: UserType | null
    handleClose: () => void
    modal: boolean
}


export const ModalWindow = (props: ModalWindowType) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '30%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return <div>
        <Modal
            open={props.modal}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    User information
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    I live
                    in: {props.user?.address.city + ' ' + props.user?.address.street + ' ' + props.user?.address.suite} and
                    I work at: {props.user?.company.name}
                </Typography>
            </Box>
        </Modal>
    </div>
}