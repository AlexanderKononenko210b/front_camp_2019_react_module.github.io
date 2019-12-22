import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import Root from "./core/root-component";
import { ErrorBoundary } from "./features/film/shared/components";

ReactDom.render(
    <ErrorBoundary>
        <Root/>
    </ErrorBoundary>,
    document.getElementById("container")
);