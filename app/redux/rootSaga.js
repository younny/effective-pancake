import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import api from '../services/Api'

/* --------- Types --------- */
import LoginActionTypes from './login/actions'

/* --------- Actions --------- */
import { login } from './LoginSagas'


export default function * root () {
    yield all([
        takeLatest(LoginActionTypes.LOGIN_REQUEST, login, api)
    ])
}