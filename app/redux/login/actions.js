
export const LOGIN_REQUEST = 'login/request';
export const LOGIN_SUCCESS = 'login/success';
export const LOGIN_FAILURE = 'login/failure';

export default {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
}

export const login = (auth) => { type: LOGIN_REQUEST, data: auth }