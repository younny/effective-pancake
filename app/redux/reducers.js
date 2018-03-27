import { combineReducers } from 'redux'
import startup from './startup'
import login from './login'

const reducers = combineReducers({
    startup,
    login
})

export default reducers