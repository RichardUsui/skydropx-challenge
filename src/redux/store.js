import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import popular from './reducers/popular'
import rated from './reducers/rated'
import emite from './reducers/emite'
import itemSelected from './reducers/itemSelected'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    popular,
    rated,
    emite,
    itemSelected
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store