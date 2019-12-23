import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import Root from "./core/root-component";
import { ErrorBoundaryContainer } from "./features/film/shared/containers/error-container";
import store from "../src/core/store";

ReactDom.render(
    <Provider store = { store }>
        <ErrorBoundaryContainer>
            <Root/>
        </ErrorBoundaryContainer>
    </Provider>,
    document.getElementById("container")
);