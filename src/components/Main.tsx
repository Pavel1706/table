import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../bll/store";
import {getUsersTC} from "../bll/reducer";
import {UserType} from '../dal/api';
import {Button} from "@mui/material";
import styles from "./styles.module.css"
import {TableUsers} from "./TableUsers";


export const Main = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const users = useSelector<AppStateType, UserType[]>(store => store.users)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    const returnUser = () => {
        dispatch(getUsersTC())
        setSearchTerm('')
    }


    return <div>
        <input value={searchTerm} className={styles.input} type="text" placeholder="Search..." onChange={e => {
            setSearchTerm(e.currentTarget.value)
        }}/>
        <Button style={{backgroundColor: 'greenyellow'}} variant="contained" onClick={returnUser}>RESET</Button>
        <TableUsers users={users} searchTerm={searchTerm}/>

    </div>
}