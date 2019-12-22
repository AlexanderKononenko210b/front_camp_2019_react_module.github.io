import { listReducer } from "../features/film/film-list";
import { Actions, ElementsOption } from "../features/shared/constants";
import { searchMoviesData } from "../static/mockSearchResult";

describe(" list reducer", () => {
    const initialState = {
        movies: [],
        searchValue: "",
        searchOption: "title",
        sortOption: "release_date",
        isSearchLeftBtn: true,
        isSortLeftBtn: true
    }
    it("should return the initial state", () => {
        expect(listReducer(undefined, {}))
        .toEqual(initialState);
    });
    it("should handle Actions.SET_SEARCH_MOVIES", () => {
        expect(listReducer(initialState, { 
            type: Actions.SET_SEARCH_MOVIES, 
            payload: searchMoviesData.data
        }))
        .toEqual({
                movies: searchMoviesData.data,
                searchValue: "",
                searchOption: "title",
                sortOption: "release_date",
                isSearchLeftBtn: true,
                isSortLeftBtn: true
            }
        );
    });
    it("should handle Actions.SET_SEARCH_OPTION", () => {
        expect(listReducer(initialState, {
            type: Actions.SET_SEARCH_OPTION,
            payload: ElementsOption.SEARCH_GENRES_VALUE
        }))
        .toEqual({
                movies: [],
                searchValue: "",
                searchOption: ElementsOption.SEARCH_GENRES_VALUE,
                sortOption: "release_date",
                isSearchLeftBtn: true,
                isSortLeftBtn: true
            })
    });
    it("should handle Actions.SET_SORT_ORDER_OPTION", () => {
        expect(listReducer(initialState, { 
            type: Actions.SET_SORT_ORDER_OPTION,
            payload: ElementsOption.SORT_RATING_VALUE}))
        .toEqual({
            movies: [],
            searchValue: "",
            searchOption: "title",
            sortOption: ElementsOption.SORT_RATING_VALUE,
            isSearchLeftBtn: true,
            isSortLeftBtn: true
        })
    });
    it("should handle Actions.SET_SEARCH_VALUE", () => {
        expect(listReducer(initialState, { 
            type: Actions.SET_SEARCH_VALUE,
            payload: "abc"}))
        .toEqual({
            movies: [],
            searchValue: "abc",
            searchOption: "title",
            sortOption: "release_date",
            isSearchLeftBtn: true,
            isSortLeftBtn: true
        })
    });
    it("should handle Actions.CHOOSE_SEARCH_BTN_STYLE", () => {
        expect(listReducer(initialState, { 
            type: Actions.CHOOSE_SEARCH_BTN_STYLE,
            payload: false
        }))
        .toEqual({
            movies: [],
            searchValue: "",
            searchOption: "title",
            sortOption: "release_date",
            isSearchLeftBtn: false,
            isSortLeftBtn: true
        })
    });
    it("should handle Actions.CHOOSE_SORT_BTN_STYLE", () => {
        expect(listReducer(initialState, { 
            type: Actions.CHOOSE_SORT_BTN_STYLE,
            payload: false
        }))
        .toEqual({
            movies: [],
            searchValue: "",
            searchOption: "title",
            sortOption: "release_date",
            isSearchLeftBtn: true,
            isSortLeftBtn: false
        })
    })
})