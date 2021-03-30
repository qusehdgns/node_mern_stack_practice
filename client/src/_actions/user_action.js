import Axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER
} from './types';
import { USER_SERVER } from '../components/Config';

export function loginUser(dataTosubmit) {
    const req = Axios.post(`${USER_SERVER}/login`, dataTosubmit)
        .then(res => res.data );

        return {
            type: LOGIN_USER,
            payload: req
        }
}

export function registerUser(dataTosubmit){
    const req = Axios.post(`${USER_SERVER}/register`, dataTosubmit)
        .then(res => res.data );

        return {
            type: REGISTER_USER,
            payload: req
        }
}

export function auth(){
    const req = Axios.get(`${USER_SERVER}/auth`)
        .then(res => res.data );

        return {
            type: AUTH_USER,
            payload: req
        }
}

export function logoutUser(){
    const req = Axios.get(`${USER_SERVER}/logout`)
    .then(res => res.data);

    return {
        type: LOGOUT_USER,
        payload: req
    }
}