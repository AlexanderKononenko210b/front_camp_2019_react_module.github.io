import React from "react";
import propTypes from "prop-types";
import { MoviesGroupComponent, CardComponent } from "../shared/components";
import { MovieDescriptionGroupComponent } from "./components";
import { LabelComponent, EmptyMoviesGroupComponent } from "../shared/components";

import style from "../../../assets/style";
import { Content, ElementsOption } from "../../shared/constants";

const MovieDetailComponent = (props) => {
    const { movie, movies, backIconOnClickHandle } = props;
    let id = 0;
    const moviesList = movies.length > 0
        ?   <div style = { style.moviesGroup}>
                { movies.map(group => 
                    <div key = {id++} style = { style.movieGroup }>
                        <MoviesGroupComponent
                            group = { group }
                            type = { ElementsOption.DETAIL_TYPE }>
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
            </div>
            <div style = { style.detailBlockHeader }>
                <CardComponent
                    containerStyle = { style.detailImgContainer }
                    imgStyle = { style.card }
                    itemUrl = { movie.poster_path }>
                </CardComponent>
                <MovieDescriptionGroupComponent
                    movie = { movie }>
                </MovieDescriptionGroupComponent>
                <CardComponent
                    containerStyle = { style.detailBackImgContainer }
                    imgStyle = { style.backImg }
                    itemUrl = { "./root/dist/image/magnifier.ignore.png" }
                    onClickHandler = { backIconOnClickHandle }>
                </CardComponent>
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
    backIconOnClickHandle: propTypes.func.isRequired
}

export default MovieDetailComponent;