import { Actions } from "../../../../shared/constants";

export const setError = (isError) => {
    return {
        type: Actions.SET_ERROR,
        payload: isError
    }
}

export const setErrorInfo = (errorInfo) => {
    return {
        type: Actions.SET_ERROR_INFO,
        payload: errorInfo
    }
}