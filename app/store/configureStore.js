import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLoggerMiddleware from 'redux-logger'

import sagaMonitor from './sagaMonitor'


export default (reducers, rootSaga) => {
    const middleware = [];
    const enhancers = [];

    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    if (__DEV__ === true) {
        middlewares.push(createLoggerMiddleware({ stateTransformer = (state) => state.toJS() }));
    }

    enhancers.push(applyMiddleware(...middleware));

    const store = createStore(reducers, compose(...enhancers));
    const sagaManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagaManager,
        sagaMiddleware
    }
}