import { combineReducers } from "redux"
import { listReducer } from "../features/film/film-list";
import { detailReducer } from "../features/film/film-detail";

export default combineReducers ({
    listReducer,
    detailReducer
})