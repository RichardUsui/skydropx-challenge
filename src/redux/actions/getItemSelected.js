export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const getItemSelected = (id) => (dispatch) => {
    
    dispatch({  type: FETCH_ITEMS_REQUEST })

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=ef24bfede774ea0bb15a1a6a322444fc&language=en-US`)
    .then(res => res.json())
    .then(item => {
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload:{
                result: item
            }
        })
    })
    .catch(error => {
        dispatch({
            type: FETCH_ITEMS_ERROR,
            error: error.toString()
        })
    })
}