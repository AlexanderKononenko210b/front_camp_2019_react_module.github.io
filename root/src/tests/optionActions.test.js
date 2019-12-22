import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { setSearchOption, setSortOption, chooseSearchBtnStyle, chooseSortBtnStyle } from "../features/film/shared/containers/option-container";
import { Actions, ElementsOption } from "../features/shared/constants";
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

describe("sync option actions", () => {
    it("setSearchOption()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.SET_SEARCH_OPTION,
                payload: ElementsOption.SEARCH_GENRES_VALUE
            }
        ]
        store.dispatch(setSearchOption(ElementsOption.SEARCH_GENRES_VALUE));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it("setSortOption()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.SET_SORT_ORDER_OPTION,
                payload: ElementsOption.SORT_RATING_VALUE
            }
        ]
        store.dispatch(setSortOption(ElementsOption.SORT_RATING_VALUE));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it("chooseSearchBtnStyle()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.CHOOSE_SEARCH_BTN_STYLE,
                payload: false
            }
        ]
        store.dispatch(chooseSearchBtnStyle(false));
        expect(store.getActions()).toEqual(expectedActions);
    })
    it("chooseSortBtnStyle()", () => {
        const store = mockStore(() => initialState);
        const expectedActions = [
            {
                type: Actions.CHOOSE_SORT_BTN_STYLE,
                payload: false
            }
        ]
        store.dispatch(chooseSortBtnStyle(false));
        expect(store.getActions()).toEqual(expectedActions);
    })
})
