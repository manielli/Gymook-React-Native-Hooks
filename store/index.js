import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import reducers from '../reducers'

export default () => {
    let store = createStore(
        reducers,
        {},
        compose(
            applyMiddleware()
        )
    )
    return { store }
}
