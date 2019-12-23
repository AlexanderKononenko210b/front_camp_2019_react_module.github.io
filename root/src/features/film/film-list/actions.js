import { Actions } from "../../shared/constants";
import config from "../../../../../config";

import { fetchWrapper, urlBuilder } from "../../../services";

export function setSearchMovies(data) {
    return {
        type: Actions.SET_SEARCH_MOVIES,
        payload: data
    }
}

export function asyncGetMovies(params) {
    return dispatch => {
        const url = urlBuilder(config.PATH_DEFAULT, params);
        return fetchWrapper(url)
        .then(result => {
            if(result) {
                dispatch(setSearchMovies(result.data));
            } else {
                dispatch(setSearchMovies([]));
            }
        });
    }
}

export const setSearchValue = (value) => {
    return {
        type: Actions.SET_SEARCH_VALUE,
        payload: value
    }
}