import { Actions } from "../../shared/constants";

const initState = {
    movies: [],
    searchValue: "",
    searchOption: "title",
    sortOption: "release_date",
    isSearchLeftBtn: true,
    isSortLeftBtn: true
}

const listReducer = (state = initState, action) => {
    switch(action.type) {
        case Actions.SET_SEARCH_MOVIES: {
            return { ...state, 
                movies: action.payload 
            }
        }
        case Actions.SET_SEARCH_OPTION: {
            return {
                ...state,
                searchOption: action.payload
            }
        }
        case Actions.SET_SORT_ORDER_OPTION: {
            return {
                ...state,
                sortOption: action.payload
            }
        }
        case Actions.SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue: action.payload
            }
        }
        case Actions.CHOOSE_SEARCH_BTN_STYLE: {
            return {
                ...state,
                isSearchLeftBtn: action.payload
            }
        }
        case Actions.CHOOSE_SORT_BTN_STYLE: {
            return {
                ...state,
                isSortLeftBtn: action.payload
            }
        }
            
        default: {
            return state
        }
    }
}

export default listReducer;

