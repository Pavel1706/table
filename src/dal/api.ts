import axios from 'axios'

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
})


export const userApi = {
    getUsers(){
        return instance.get<UserType[]>('users')
    }
}

export type UserType = {
    "id": number
    "name": string
    "username": string
    "email": string
    "address": {
        "street": string
        "suite": string
        "city": string
        "zipcode": string
        "geo": {
            "lat": string
            "lng": string
        }
    },
    "phone": string
    "website": string
    "company": {
        "name": string
        "catchPhrase": string
        "bs": string
    }
}