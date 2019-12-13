import React from "react";
import propTypes from "prop-types";

const MovieDescriptionComponent = (props) => {
    const { style, content } = props;
    return (
        <div style = { style }>
                <p>{ content }</p>
        </div>
    )
}

MovieDescriptionComponent.propTypes = {
    style: propTypes.object,
    content: propTypes.string
}

export default MovieDescriptionComponent;