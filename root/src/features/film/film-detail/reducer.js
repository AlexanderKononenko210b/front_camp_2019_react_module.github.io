import { Actions, Constants } from "../../shared/constants";


const initState = {
    moviesByGenre: [],
    movie: Constants.EMPTY_MOVIE
}

const detailReducer = (state = initState, action) => {
    switch(action.type) {
        case Actions.SET_DETAIL_MOVIES: {
            return {
                ...state,
                moviesByGenre: action.payload
            }
        }
        case Actions.SET_MOVIE_BY_ID: {
            return {
                ...state,
                movie: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default detailReducer;