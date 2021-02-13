import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from '../actions/getListPopular'

const defaultState = {
    items: [], 
    isFetching: false,
    error: null
}


function popular (state = defaultState, action)
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
                items: action.payload.results
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

export default popular