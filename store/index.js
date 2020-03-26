import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default () => {
    let store = createStore(
        reducers,
        {},
        compose(
            applyMiddleware(thunk)
        )
    )
    return { store }
}
