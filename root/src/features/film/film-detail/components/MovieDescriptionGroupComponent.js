import React from "react";
import propTypes from "prop-types";

import { MovieDescriptionComponent } from "./index";
import { HeaderComponent, LabelComponent } from "../../shared/components";
import { Content } from "../../../shared/constants";

import style from "../../../../assets/style";

const MovieDescriptionGroupComponent = (props) => {
    const { movie } = props;
    return (
        <div style = { style.detailDescriptionContainer }>
            <div style = { style.detailDescriptionHeader}>
                <HeaderComponent
                    style = { style.headerInline }
                    content = { movie.title }>
                </HeaderComponent>
                <LabelComponent
                    style = { style.raiting }
                    content = { `${movie.vote_average}`}>
                </LabelComponent>
            </div>
            <LabelComponent
                style = { style.tagline }
                content = { movie.tagline }>
            </LabelComponent>
            <div style = { style.durationReleaseYear}>
                <LabelComponent
                    style = { style.releaseYear }
                    content = { movie.release_date ? `${movie.release_date.split("-")[0]} ${Content.MOVIE_YEAR_LABEL}` : "" }>
                </LabelComponent>
                <LabelComponent
                    style = { style.runtime }
                    content = { movie.runtime ? `${movie.runtime} ${Content.MOVIE_RUNTIME_LABEL}` : ""}>
                </LabelComponent>
            </div>
            <MovieDescriptionComponent
                style = { style.description }
                content = { movie.overview ? movie.overview : "" }>
            </MovieDescriptionComponent>
        </div>
    )
}

MovieDescriptionGroupComponent.propStyle = {
    movie: propTypes.object.isRequired
}

export default MovieDescriptionGroupComponent;