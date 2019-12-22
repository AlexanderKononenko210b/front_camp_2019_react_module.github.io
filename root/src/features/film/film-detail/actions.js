import { Actions, Constants } from "../../shared/constants";
import config from "../../../../../config";

import { fetchWrapper, urlBuilder } from "../../../services";

export const setMoviesByGenre = (data) => {
    return {
        type: Actions.SET_DETAIL_MOVIES,
        payload: data
    }
}

export const setMovieById = (data) => {
    return {
        type: Actions.SET_MOVIE_BY_ID,
        payload: data
    }
}

export const asyncGetMoviesByGenres = (params) => (dispatch) => {
    const url = urlBuilder(config.PATH_DEFAULT, params);
    return fetchWrapper(url)
        .then(result => {
            if(result) {
                dispatch(setMoviesByGenre(result.data));
            } else {
                dispatch(setMoviesByGenre([]));
            }
        });
}

export const asyncGetDetailInfo = (id) => (dispatch) => {
    const url = urlBuilder(config.PATH_DEFAULT, null, id);
    return fetchWrapper(url)
        .then(result => {
            if(result) {
                dispatch(setMovieById(result));
                const params = Object.entries({
                        filter: result.genres,
                        limit: Constants.LIMIT_QUERY
                    })
                const url = urlBuilder(config.PATH_DEFAULT, params);
                fetchWrapper(url)
                    .then(result => {
                        if(result) {
                            dispatch(setMoviesByGenre(result.data));
                        } else {
                            dispatch(setMoviesByGenre([]));
                        }
                    })
            } else {
                dispatch(setMovieById({}));
            }
        });
}