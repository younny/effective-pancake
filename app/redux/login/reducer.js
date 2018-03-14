import Immutable from 'seamless-immutable'
import Types from './actions'


const initialState = Immutable({
    auth: null,
    error: null,
    fetching: false
})

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case Types.LOGIN_REQUEST:
        return state.merge({ fetching: true })

        case Types.LOGIN_SUCCESS:
        return state.merge({ fetching: false, auth: action.data })

        case Types.LOGIN_FAILURE:
        return state.merge({ fetching: false, error: action.error, auth: null })

        default:
        return state
    }
}