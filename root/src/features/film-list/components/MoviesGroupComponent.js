import React from "react";
import propTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup"
import { MovieCardComponent } from "../../shared/components";

const MoviesGroupComponent = (props) => {
    const { group, movieOnClickHandle } = props;
    return (
        <CardGroup>
            { group.map(card => 
                <MovieCardComponent
                    key = { card.id }
                    itemUrl = { card.poster_path }
                    itemReleaseDate = { card.release_date }
                    itemGenre = { card.genres.join("&") }
                    itemTitle = { card.title }
                    onClickHandle = { movieOnClickHandle }>
                </MovieCardComponent>
            )}
        </CardGroup>
    )
}

MoviesGroupComponent.propTypes = {
    group: propTypes.array.isRequired,
    movieOnClickHandle: propTypes.func.isRequired
}

export default MoviesGroupComponent;