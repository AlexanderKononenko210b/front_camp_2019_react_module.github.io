import { combineReducers } from "redux"
import { listReducer } from "../features/film/film-list";
import { detailReducer } from "../features/film/film-detail";
import { errorReducer } from "../features/film/shared/containers/error-container";

export default combineReducers ({
    listReducer,
    detailReducer,
    errorReducer
})