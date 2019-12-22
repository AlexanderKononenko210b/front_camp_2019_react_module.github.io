import React from "react";
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import store from "./store"

import { FilmListContainer } from "../features/film/film-list";
import { MovieDetailContainer } from "../features/film/film-detail";
import { InvalidUrlComponent } from "../features/film/shared/components";

const Root = () => {
    return (
        <Provider store = { store }>
            <Router>
                <Switch>
                    <Route exact path = "/" component = {FilmListContainer} />
                    <Route exact path = "/search" component = {FilmListContainer} />
                    <Route exact path = "/film/:id" component = {MovieDetailContainer} />
                    <Route path="*" component = {InvalidUrlComponent}/>
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root;