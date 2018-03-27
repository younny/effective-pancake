import Immutable from 'immutable'
import Types from './actions'


/*
TODO.
Immutable.List, Map, OrderedMap, Set, OrderedSet, Stack
*/

const initialState = Immutable.Map({
    auth: null,
    error: null,
    fetching: false
})

export default (state=initialState, action) => {
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