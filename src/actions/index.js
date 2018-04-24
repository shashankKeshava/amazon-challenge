export const fetchData = (type = 'DEFAULT', page) => dispatch => {
    return fetch(
        `https://sellics-frontend-test.herokuapp.com/reviews/${page}`,
        {
            method: 'GET',
            // headers:new Headers({
            //     'Access-Control-Request-Method': 'GET',
            //     'Access-Control-Request-Headers': 'Content-Type, Authorization'
            // }),
            mode: 'cors'
        }
    )
        .then(res => {console.log(res); return res.json()})
        .then(response => dispatch({ type, response }))
        .catch(error => dispatch({ type: 'FETCH_FAIL', error }));
};
