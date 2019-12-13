import React, { Component } from "react";
import propTypes from "prop-types";
import FilmListComponent from "./components/FilmListComponent";
import { Content } from "../shared/constants";

import moviesList from "../../static/movieList";
import movieSvc from "../../services/movieSvc";

class FilmListContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.searchOnClickHandle = this.searchOnClickHandle.bind(this);
        this.searchOnChangeHandle = this.searchOnChangeHandle.bind(this);
        this.optionOnClickHandle = this.optionOnClickHandle.bind(this);
        this.movieOnClickHandle = this.movieOnClickHandle.bind(this);
        this.state = {
            movies: moviesList,
            searchContent: "",
            searchOption: "TITLE",
            sortOption: "RATING",
            searchCount: moviesList.length
        }
    }

    initState() {
        const movies = moviesList;
        this.state({
            movies: movies,
            searchCount: movies.length
        })
    }

    searchOnClickHandle (event) {
        event.preventDefault();
        console.log("Search Button onClick");
    }

    searchOnChangeHandle (event) {
        event.preventDefault();
        this.setState({
            searchContent: `${event.target.value}`
        })
    }

    optionOnClickHandle (event) {
        event.preventDefault();
        const data = event.target.id.split("_");
        if(data[0] == "search") {
            const option = data[1] == "left"
                ? Content.OPTION_SEARCH_LEFT_BTN
                : Content.OPTION_SEARCH_RIGHT_BTN;
            this.setState({
                searchOption: option
            })
        } else if(data[0] == "sort") {
            const option = data[1] == "left"
                ? Content.OPTION_SORT_LEFT_BTN
                : Content.OPTION_SORT_RIGHT_BTN;
            this.setState({
                sortOption: option
            })
        }
    }

    movieOnClickHandle() {
        console.log("Movie On Click Handle");
    }

    render () {
        const movies = movieSvc.groupMovies(this.state.movies);
        return (
            <FilmListComponent 
                searchOnClickHandle = { this.searchOnClickHandle }
                searchOnChangeHandle = { this.searchOnChangeHandle }
                optionOnClickHandle = { this.optionOnClickHandle }
                movieOnClickHandle = { this.movieOnClickHandle }
                movies = { movies }
                searchCount = { this.state.searchCount }>
            </FilmListComponent>
        )
    }
}

export default FilmListContainer;