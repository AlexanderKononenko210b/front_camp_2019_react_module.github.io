import React from "react";
import propTypes from "prop-types";

import CardGroup from "react-bootstrap/CardGroup"
import { MovieCardContainer } from "../containers/movie-card-container";

const MoviesGroupComponent = (props) => {
    const { group, type } = props;
    return (
        <CardGroup>
            { group.map((card, index) => 
                <MovieCardContainer
                    key = { index }
                    type = { type }
                    card = { card }>
                </MovieCardContainer>
            )}
        </CardGroup>
    )
}

MoviesGroupComponent.propTypes = {
    group: propTypes.array.isRequired,
}

export default MoviesGroupComponent;