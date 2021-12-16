import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {IconButton, Table} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {ModalWindow} from "./ModalWindow";
import TableContainer from "@mui/material/TableContainer";
import React, {useCallback, useState} from "react";
import {HighLight} from "./HighLight";
import {UserType} from "../dal/api";
import {removeUserAC} from "../bll/reducer";
import {useDispatch} from "react-redux";

type TableType = {
    users: UserType[]
    searchTerm: string
}


export function TableUsers(props: TableType) {
    const [user, setUser] = useState<UserType | null>(null)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()


    const removeUser = (id: number, users: Array<UserType>) => {
        dispatch(removeUserAC(id, users))
    }

    const light = useCallback((str: string) => {
        return <HighLight searchTerm={props.searchTerm} str={str}/>
    }, [props.searchTerm])

    const showModal = (user: UserType) => {
        setUser(user)
        setModal(true)

    }
    const handleClose = () => {
        setModal(false)
    }

    return <div>
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Username</TableCell>
                        <TableCell align="center">email</TableCell>
                        <TableCell align="center">delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.filter((value) => {
                        if (props.searchTerm === '') {
                            return value
                        } else if (value.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                            return value
                        } else if (value.email.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                            return value
                        } else if (value.username.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                            return value
                        }
                    }).map((user) => (
                        <TableRow
                            key={user.id}
                        >
                            <TableCell align="center" onClick={() => {
                                showModal(user)
                            }}>
                                {light(user.name)}
                            </TableCell>
                            <TableCell align="center" onClick={() => {
                                showModal(user)
                            }}>{light(user.username)}</TableCell>
                            <TableCell align="center" onClick={() => {
                                showModal(user)
                            }}>{light(user.email)} </TableCell>
                            <TableCell align="center">
                                <IconButton onClick={() => {
                                    removeUser(user.id, props.users)
                                }}>
                                    <Delete/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modal && <ModalWindow user={user} handleClose={handleClose} modal={modal}/>}
        </TableContainer>
    </div>
}