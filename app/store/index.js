import configureStore from './configureStore'
import rootSaga from '../redux/rootSaga'
import reducers from '../redux/reducers'

export default () => {
    const { store } = configureStore(reducers, rootSaga)

    return store
}