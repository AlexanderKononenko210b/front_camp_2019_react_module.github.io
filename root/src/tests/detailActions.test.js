import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { setMovieById, asyncGetMoviesByGenres, asyncGetDetailInfo, setMoviesByGenre } from "../features/film/film-detail";
import { Actions, Constants } from "../features/shared/constants";
import { searchMoviesData, searchMovieByIdData } from "../static/mockSearchResult";
import "@babel/polyfill";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialStore = {
    moviesByGenre: [],
    movie: Constants.EMPTY_MOVIE
}

describe('async list actions', () => {
    afterEach(() => {
    fetchMock.restore()
    })
    it("asyncGetDetailInfo()", () => {
        fetchMock
            .get("https://reactjs-cdp.herokuapp.com/movies/299534",
                {
                    status: 200,
                    body: searchMovieByIdData
                }
            )
            .get("https://reactjs-cdp.herokuapp.com/movies?filter=Action,Adventure,Science%20Fiction&limit=20",
                {
                    status: 200,
                    body: searchMoviesData
                }
            )
        const expectedActions = [
            {
                type: Actions.SET_MOVIE_BY_ID,
                payload: searchMovieByIdData
            }
        ]
        const store = mockStore(initialStore);
        const id = 299534;
        return store.dispatch(asyncGetDetailInfo(id))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });
    it("asyncGetMoviesByGenres()", () => {
        fetchMock.get("https://reactjs-cdp.herokuapp.com/movies?filter=Action,Adventure,Science%20Fiction&limit=20",
            {
                status: 200,
                body: searchMoviesData
            });
        const expectedActions = [
            {
                type: Actions.SET_DETAIL_MOVIES,
                payload: searchMoviesData.data
            }
        ];
        const store = mockStore(initialStore);
        const params = Object.entries({
            filter: [
                "Action",
                "Adventure",
                "Science Fiction"
            ],
            limit: Constants.LIMIT_QUERY
        })
        return store.dispatch(asyncGetMoviesByGenres(params))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    })
})
describe("sync detail actions", () => {
    it("setMoviesByGenre()", () => {
        const store = mockStore(initialStore);
        const expectedActions = [
            {
                type: Actions.SET_DETAIL_MOVIES,
                payload: searchMoviesData.data
            }
        ]
        store.dispatch(setMoviesByGenre(searchMoviesData.data))
        expect(store.getActions()).toEqual(expectedActions);
    });
    it("setMovieById", () => {
        const store = mockStore(initialStore);
        const expectedActions = [
            {
                type: Actions.SET_MOVIE_BY_ID,
                payload: searchMovieByIdData
            }
        ]
        store.dispatch(setMovieById(searchMovieByIdData))
        expect(store.getActions()).toEqual(expectedActions);    
    })
})