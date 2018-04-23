export const fetchData = (type = "DEFAULT", payload) => dispatch => {
    return dispatch({type, payload})
}