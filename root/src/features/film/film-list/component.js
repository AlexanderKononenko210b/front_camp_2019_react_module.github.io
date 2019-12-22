import React from "react";
import propTypes from "prop-types";

import { SearchContainer } from "./search-container";
import { HeaderComponent, LabelComponent, EmptyMoviesGroupComponent, MoviesGroupComponent } from "../shared/components";
import { OptionContainer } from "../shared/containers/option-container";
import { Content, ElementsOption } from "../../shared/constants";

import style from "../../../assets/style";

const FilmListComponent = (props) => {
    const { movies, searchCount } = props;
    const { movieOnClickHandle } = props;
    let id = 0;
    const moviesList = movies.length > 0
        ?   <div style = { style.moviesGroup}>
                { movies.map(group => 
                    <div key = {id++} style = { style.movieGroup }>
                        <MoviesGroupComponent
                            movieOnClickHandle = { movieOnClickHandle }
                            group = { group }
                            type = { ElementsOption.SEARCH_TYPE }>
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
            <div style = { style.searchBlock }>
                <HeaderComponent
                    style = { style.header }
                    content = { Content.HEADER_SEARCH }>
                </HeaderComponent>
                <SearchContainer></SearchContainer>
                <OptionContainer
                    type = { ElementsOption.SEARCH_TYPE }>
                </OptionContainer>
            </div>
            <div style = { style.middleContainer }>
                <div style = { style.searchCount }>
                    <LabelComponent
                        style = { style.searchCount }
                        content = { `${searchCount} ${Content.SEARCH_COUNT}` }>
                    </LabelComponent>
                </div>
                <OptionContainer
                    type = { ElementsOption.SORT_TYPE }>
                </OptionContainer>
            </div>
            <div>{ moviesList }</div>
        </div>
    )
}

FilmListComponent.propTypes = {
    movies: propTypes.array.isRequired,
    searchCount: propTypes.number.isRequired,
    movieOnClickHandle: propTypes.func.isRequired
}

export default FilmListComponent;