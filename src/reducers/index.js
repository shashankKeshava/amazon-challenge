import { merge } from 'timm';

const initialState = {
    isLoading: true,
};

const Amazon = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return merge({ isLoading: false }, state, action.payload);
        default:
            return state;
    }
};

export default Amazon;
