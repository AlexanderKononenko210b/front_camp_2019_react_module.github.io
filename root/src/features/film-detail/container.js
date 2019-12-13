import React, { Component } from "react";
import { MovieDetailComponent } from "./components";

import moviesList from "../../static/movieList";
import movieSvc from "../../services/movieSvc";

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: moviesList[0],
            movies: moviesList
        }
        this.backIconOnClickHandle = this.backIconOnClickHandle.bind(this);
        this.movieOnClickHandle = this.movieOnClickHandle.bind(this);
    }

    backIconOnClickHandle() {
        console.log("Back Icon On Click Handle");
    }

    movieOnClickHandle() {
        console.log("Movie On Click Handle");
    }

    render() {
        const movies = movieSvc.groupMovies(this.state.movies);
        return (
            <MovieDetailComponent
                movie = { this.state.movie }
                movies = { movies }
                backIconOnClickHandle = { this.backIconOnClickHandle }
                movieOnClickHandle = { this.movieOnClickHandle }>
            </MovieDetailComponent>
        )
    }
}

export default MovieDetailContainer;
