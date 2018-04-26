export const fetchData = (type = 'DEFAULT', page) => dispatch => {
    return fetch(
        `https://sellics-frontend-test.herokuapp.com/reviews/${page}`,
        {
            method: 'GET',
        }
    )
        .then(res => res.json())
        .then(response => dispatch({ type, payload: { ...response } }))
        .catch(error => dispatch({ type: 'FETCH_FAIL', error }));
};
