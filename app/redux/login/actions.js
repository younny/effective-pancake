export const LOGIN_REQUEST = 'login/request'
export const LOGIN_SUCCESS = 'login/success'
export const LOGIN_FAILURE = 'login/failure'

export const login = (auth) => ({ type: LOGIN_REQUEST, data: auth })

export default {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
}