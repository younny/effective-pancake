import { combineReducers } from 'redux'

import configureStore from './configureStore'
import rootSaga from '../actions/rootSaga'
import reducers from '../actions/reducers'

export default () => {
    const { store, sagaManager, sagaMiddleware } = configureStore(reducers, rootSaga);
    return store
}