import { Actions } from "../../../../shared/constants";

export const chooseSearchBtnStyle = (isLeftBtn) => {
    return {
        type: Actions.CHOOSE_SEARCH_BTN_STYLE,
        payload: isLeftBtn
    }
}

export const chooseSortBtnStyle = (isLeftBtn) => {
    return {
        type: Actions.CHOOSE_SORT_BTN_STYLE,
        payload: isLeftBtn
    }
}

export const setSearchOption = (option) => {
    return {
        type: Actions.SET_SEARCH_OPTION,
        payload: option
    }
}

export const setSortOption = (option) => {
    return {
        type: Actions.SET_SORT_ORDER_OPTION,
        payload: option
    }
}

