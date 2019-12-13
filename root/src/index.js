import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Root from "./core/root-component";
import { ErrorBoundary } from "./features/shared/components";

ReactDom.render(
    <ErrorBoundary>
        <Root/>
    </ErrorBoundary>,
    document.getElementById("container")
);