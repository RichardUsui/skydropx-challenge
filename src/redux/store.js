import {createStore, combineReducers, applyMiddleware} from 'redux'
import popular from './reducers/popular'
import rated from './reducers/rated'
import trend from './reducers/trend'
import itemSelected from './reducers/itemSelected'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    popular,
    rated,
    trend,
    itemSelected
})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, 
    // composeEnhancers(
        applyMiddleware(thunk)
    // )
)

export default store