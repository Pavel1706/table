import {Dispatch} from "redux";
import {userApi, UserType} from "../dal/api";

const InitialState: UserType[] = []


export const usersReducer = (state: UserType[] = InitialState, action: AllActionType): UserType[] => {
    switch (action.type) {
        case "GET-USER":
            return action.users
        case "REMOVE-USER":
            return action.users.filter(u => u.id !== action.userId)
        default:
            return state;
    }
};

const setUserAC = (users: UserType[]) => {
    return {
        type: "GET-USER",
        users,
    } as const
}

export const removeUserAC = (userId: number, users: UserType[]) => {
    return {
        type: "REMOVE-USER",
        userId,
        users,
    } as const
}

export const getUsersTC = () => (dispatch: Dispatch) => {
    userApi.getUsers()
        .then(res => {
            dispatch(setUserAC(res.data))
        })
        .catch(err => console.log(err))
}


type SetUserType = ReturnType<typeof setUserAC>
type RemoveUserType = ReturnType<typeof removeUserAC>

type AllActionType = SetUserType | RemoveUserType