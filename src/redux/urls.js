import * as ActionTypes from './ActionTypes';

export const Urls = (state = {
    errMess: null,
    urls: []
}, action) => {
switch(action.type) {
    case ActionTypes.ADD_URLS:
        return {...state, isLoading: false, errMess: null, urls: action.payload};

    case ActionTypes.URLS_FAILED:
        return {...state, isLoading: false, errMess: action.payload, urls: []};

        default:
            return state;
    }
}