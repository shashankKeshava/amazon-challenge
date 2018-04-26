export const fetchData = (type = 'DEFAULT', page) => dispatch => {
    return fetch(
        `https://sellics-frontend-test.herokuapp.com/reviews/${page}`,
        {
            method: 'GET',
            // headers: new Headers({
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            // }),
            // mode: 'cors',
        }
    )
        .then(res => {
            console.log('Response', res);
            return res.json();
        })
        .then(response => dispatch({ type, response }))
        .catch(error => dispatch({ type: 'FETCH_FAIL', error }));
};
