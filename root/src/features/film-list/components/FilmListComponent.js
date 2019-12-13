import React from "react";
import propTypes from "prop-types";

import { SearchComponent, MoviesGroupComponent } from "./index";
import { OptionContainer, HeaderComponent, LabelComponent, EmptyMoviesGroupComponent } from "../../shared/components";
import { Content, ElementsOption } from "../../shared/constants";

import style from "../../../assets/style";

const FilmListComponent = (props) => {
    const { movies, searchCount } = props;
    const { searchOnClickHandle, searchOnChangeHandle, optionOnClickHandle, movieOnClickHandle } = props;
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
            <div style = { style.searchBlock }>
                <HeaderComponent
                    style = { style.header }
                    content = { Content.HEADER_SEARCH }>
                </HeaderComponent>
                <SearchComponent 
                    searchOnClickHandle = { searchOnClickHandle }
                    searchOnChangeHandle = { searchOnChangeHandle }>
                </SearchComponent>
                <OptionContainer
                    optionContent = { Content.OPTION_SEARCH_SPAN }
                    contentLeft = { Content.OPTION_SEARCH_LEFT_BTN }
                    contentRight = { Content.OPTION_SEARCH_RIGHT_BTN }
                    leftId = { ElementsOption.SEARCH_OPTION_LEFT_ID }
                    rightId = { ElementsOption.SEARCH_OPTION_RIGHT_ID }
                    optionContainerStyle = { style.searchOptionContainerStyle }
                    type = "search"
                    onClickHandle = { optionOnClickHandle }>
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
                    optionContent = { Content.OPTION_SORT_SPAN }
                    contentLeft = { Content.OPTION_SORT_LEFT_BTN }
                    contentRight = { Content.OPTION_SORT_RIGHT_BTN }
                    leftId = { ElementsOption.SORT_OPTION_LEFT_ID }
                    rightId = { ElementsOption.SORT_OPTION_RIGHT_ID }
                    optionContainerStyle = { style.sortOptionContainerStyle }
                    type = "sort"
                    onClickHandle = { optionOnClickHandle }>
                </OptionContainer>
            </div>
            <div>{ moviesList }</div>
        </div>
    )
}

FilmListComponent.propTypes = {
    movies: propTypes.array.isRequired,
    searchCount: propTypes.number.isRequired,
    searchOnClickHandle: propTypes.func.isRequired,
    searchOnChangeHandle: propTypes.func.isRequired,
    optionOnClickHandle: propTypes.func.isRequired,
    movieOnClickHandle: propTypes.func.isRequired
}

export default FilmListComponent;