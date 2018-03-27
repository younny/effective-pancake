import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { isImmutable, toJS } from 'immutable'
//import sagaMonitor from './sagaMonitor'

//import it from './ImmutableTransform'

export default (reducers, rootSaga) => {
    const middleware = []
    const enhancers = []

    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)

    if (__DEV__) {
        const stateTransformer = (state) => isImmutable(state) ? toJS(state) : state

        middleware.push(createLogger({ stateTransformer }))
    }

    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(reducers, compose(...enhancers))
    const sagaManager = sagaMiddleware.run(rootSaga)

    return {
        store,
        sagaManager,
        sagaMiddleware
    }
}