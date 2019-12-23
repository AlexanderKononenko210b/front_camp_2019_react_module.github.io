import { Actions } from "../../../../shared/constants";

const initState = {
    isError: false,
    errorInfo: {}
}

const errorReducer = (state = initState, action) => {
    switch(action.type) {
        case Actions.SET_ERROR: {
            return {
                ...state,
                isError: action.payload
            }
        }
        case Actions.SET_ERROR_INFO: {
            return {
                ...state,
                errorInfo: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default errorReducer;