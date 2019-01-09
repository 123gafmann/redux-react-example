import {FETCH_POST, NEW_POST} from '../actions/types';

const initialState = {
    postItems: [],
    post: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POST:
            return {
                ...state,
                postItems: action.payload
            };
        case NEW_POST:
        return {
            ...state,
            post: action.payload
        }
        default:
            return state;
    }
}