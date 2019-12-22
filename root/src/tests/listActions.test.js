import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { setSearchMovies, asyncGetMovies, setSearchOption, setSortOption, setSearchValue } from "../features/film/film-list";
import { Actions, ElementsOption } from "../features/shared/constants";
import { searchMoviesData } from "../static/mockSearchResult";
import "@babel/polyfill";


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialStore = {
    movies: [],
    searchValue: "",
    searchOption: "title",
    sortOption: "release_date",
    isSearchLeftBtn: true,
    isSortLeftBtn: true
}

describe('async list actions', () => {
    afterEach(() => {
    fetchMock.restore()
    })
    it("asyncGetMovies()", () => {
        const response = {
            status: 200,
            body: searchMoviesData
        };
        fetchMock.get(
                "https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&searchBy=title&limit=2",
                response
            );
        const expectedActions = [
            {
                type: Actions.SET_SEARCH_MOVIES,
                payload: searchMoviesData.data
            }
        ]
        const store = mockStore(initialStore);

        const params = Object.entries({
            sortBy: ElementsOption.SORT_RELEASE_DATE_VALUE,
            sortOrder: ElementsOption.SORT_ORDER_DESC,
            searchBy: ElementsOption.SEARCH_TITLE_VALUE,
            limit: 2
        })
        return store.dispatch(asyncGetMovies(params))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });
})

describe("sync list actions", () => {
    it("setSearchMovies()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.SET_SEARCH_MOVIES,
                payload: searchMoviesData.data
            }
        ]
        store.dispatch(setSearchMovies(searchMoviesData.data));
        expect(store.getActions()).toEqual(expectedActions);
    })
    //it("setSearchOption()", () => {
    //    const store = mockStore(() => initialState);
    //    const expectedActions = [
    //        {
    //            type: Actions.SET_SEARCH_OPTION,
    //            payload: ElementsOption.SEARCH_GENRES_VALUE
    //        }
    //    ]
    //    store.dispatch(setSearchOption(ElementsOption.SEARCH_GENRES_VALUE));
    //    expect(store.getActions()).toEqual(expectedActions);
    //})
    //it("setSortOption()", () => {
    //    const store = mockStore(() => initialState);
    //    const expectedActions = [
    //        {
    //            type: Actions.SET_SORT_ORDER_OPTION,
    //            payload: ElementsOption.SORT_RATING_VALUE
    //        }
    //    ]
    //    store.dispatch(setSortOption(ElementsOption.SORT_RATING_VALUE));
    //    expect(store.getActions()).toEqual(expectedActions);
    //})
    it("setSearchValue()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.SET_SEARCH_VALUE,
                payload: "abc"
            }
        ]
        store.dispatch(setSearchValue("abc"));
        expect(store.getActions()).toEqual(expectedActions);
    })
})
