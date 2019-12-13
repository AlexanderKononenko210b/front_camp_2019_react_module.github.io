import React from "react";
import propTypes from "prop-types";
import { MoviesGroupComponent } from "../../film-list/components";
import { MovieDescriptionGroupComponent } from "../../film-detail/components";
import { LabelComponent, ImgComponent, EmptyMoviesGroupComponent } from "../../shared/components";

import style from "../../../assets/style";
import { Content } from "../../shared/constants";

const MovieDetailComponent = (props) => {
    const { movie, movies, backIconOnClickHandle, movieOnClickHandle } = props;
    let id = 0;
    const moviesList = movies.length > 0
        ?   <div style = { style.moviesGroup}>
                { movies.map(group => 
                    <div key = {id++} style = { style.movieGroup }>
                        <MoviesGroupComponent
                            movieOnClickHandle = { movieOnClickHandle }
                            group = { group }>
                        </MoviesGroupComponent>
                    </div>
                )}
            </div>
        :   <EmptyMoviesGroupComponent
                containerStyle = { style.emptyMoviesStyle }
                content = { Content.EMPTY_MOVIES_RESULT }>
            </EmptyMoviesGroupComponent>
    return (
        <div style = { style.filmStyle }>
            <div style = { style.backIcon }>
                <ImgComponent
                    imgStyle = { style.backImg }
                    url = { "./posters/magnifier.ignore.png" }
                    onClickHandler = { backIconOnClickHandle }>
                </ImgComponent>
            </div>
            <div style = { style.detailBlockHeader }>
                <div style = { style.detailImage }>
                    <img src = "./posters/poster_0.ignore.jpg"></img>
                </div>
                <MovieDescriptionGroupComponent
                    movie = { movie }>
                </MovieDescriptionGroupComponent>
            </div>
            <div style = { style.middleContainer }>
                <LabelComponent
                    style = { style.searchCount }
                    content = { `${Content.SEARCH_GENRE_LABEL_START} ${movie.genres.join("&")} ${Content.SEARCH_GENRE_LABEL_END}` }>
                </LabelComponent>
            </div>
            <div>{ moviesList }</div>
        </div>
    )
}

MovieDetailComponent.propTypes = {
    movie: propTypes.object.isRequired,
    movies: propTypes.array.isRequired,
    backIconOnClickHandle: propTypes.func.isRequired,
    movieOnClickHandle: propTypes.func.isRequired
}

export default MovieDetailComponent;