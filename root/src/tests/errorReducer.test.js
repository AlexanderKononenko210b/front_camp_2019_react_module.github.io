import { errorReducer } from "../features/film/shared/containers/error-container";
import { Actions, Constants } from "../features/shared/constants"

describe("error reducer test", () => {
    const initialState = {
        isError: false,
        errorInfo: {}
    }
    it("should return the initial state", () => {
        expect(errorReducer(undefined, {}))
        .toEqual(initialState);
    });
    it("should handle Actions.SET_ERROR", () => {
        expect(errorReducer(initialState, { 
            type: Actions.SET_ERROR,
            payload: true
        }))
        .toEqual({
            isError: true,
            errorInfo: {}
        })
    });
    it("should handle Actions.SET_ERROR_INFO", () => {
        expect(errorReducer(initialState, { 
            type: Actions.SET_ERROR_INFO,
            payload: {
                componentStack: "test"
            }
        }))
        .toEqual({
            isError: false,
            errorInfo: {
                componentStack: "test"
            }
        })
    });
})
