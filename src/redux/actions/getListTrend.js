export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const getListTrend = (page) => (dispatch) => {
    
    dispatch({  type: FETCH_ITEMS_REQUEST })

    fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=ef24bfede774ea0bb15a1a6a322444fc&page=${page}`)
    .then(res => res.json())
    .then(items => {
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload:{
                results: items.results
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