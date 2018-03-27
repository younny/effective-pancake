import Immutable from 'immutable'
import Types from './actions'

const initialState = Immutable.Map({
    appInitiated: false
})

export default (state=initialState, action) => {
    switch(action.type) {
        case Types.APP_INITIATED:
        return state.merge({ appInitiated: true })
        default:
        return state
    }
}