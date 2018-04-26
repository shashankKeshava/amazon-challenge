import {merge} from 'timm'

const initialState = {
    resturant: [],
    isLoading: true,
    type: "FETCH_TYPE"
};


const Amazon=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_DATA": return merge(state,action.payload)
        default: return state;
    }

}

export default Amazon;