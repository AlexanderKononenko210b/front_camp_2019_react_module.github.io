import { detailReducer } from "../features/film/film-detail";
import { Actions, Constants } from "../features/shared/constants"
import { searchMoviesData } from "../static/mockSearchResult";
describe("detail reducer test", () => {
    const initialState = {
        moviesByGenre: [],
        movie: Constants.EMPTY_MOVIE
    }
    const movie = {
        "id": 1,
        "title": "test-title",
        "tagline": "test",
        "vote_average": 4.2,
        "vote_count": 45,
        "release_date": "2019-02-20",
        "poster_path": "some-url",
        "overview": "test",
        "budget": 3000,
        "revenue": 3,
        "runtime": 243,
        "genres": [
            "Action"
        ]
    }
    it("should return the initial state", () => {
        expect(detailReducer(undefined, {}))
        .toEqual(initialState);
    });
    it("should handle Actions.SET_DETAIL_MOVIES", () => {
        expect(detailReducer(initialState, { 
            type: Actions.SET_DETAIL_MOVIES,
            payload: searchMoviesData.data
        }))
        .toEqual({
            moviesByGenre: searchMoviesData.data,
            movie: Constants.EMPTY_MOVIE
        })
    });
    it("should handle Actions.SET_MOVIE_BY_ID", () => {
        expect(detailReducer(initialState, { 
            type: Actions.SET_MOVIE_BY_ID,
            payload: movie
        }))
        .toEqual({
            moviesByGenre: [],
            movie: movie
        })
    })
})
