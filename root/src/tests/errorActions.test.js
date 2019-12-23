import configureMockStore from "redux-mock-store"
import { setError, setErrorInfo } from "../features/film/shared/containers/error-container";
import { Actions } from "../features/shared/constants";
import "@babel/polyfill";

const mockStore = configureMockStore();

const initialStore = {
    isError: false,
    errorInfo: {}
}

describe("sync error actions", () => {
    it("setError()", () => {
        const store = mockStore(initialStore);
        const expectedActions = [
            {
                type: Actions.SET_ERROR,
                payload: true
            }
        ]
        store.dispatch(setError(true))
        expect(store.getActions()).toEqual(expectedActions);
    });
    it("setErrorInfo()", () => {
        const store = mockStore(initialStore);
        const expectedActions = [
            {
                type: Actions.SET_ERROR_INFO,
                payload: {
                    componentStack: "test"
                }
            }
        ]
        store.dispatch(setErrorInfo({
            componentStack: "test"
        }))
        expect(store.getActions()).toEqual(expectedActions);    
    })
})