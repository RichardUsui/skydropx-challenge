import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from '../actions/getItemSelected'

const defaultState = {
    item: {}, 
    isFetching: false,
    error: null
}


function itemSelected (state = defaultState, action)
{
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return{
                ...state, 
                isFetching: true
            }
        case FETCH_ITEMS_SUCCESS:
            return{
                ...state, 
                isFetching: false,
                item: action.payload.result
            }
        case FETCH_ITEMS_ERROR:
            return{
                ...state, 
                isFetching: false,
                error: action.payload.error
            }
        
        
        default:
            return state
    }
}

export default itemSelected