import React from "react";
import propTypes from "prop-types";

const HeaderComponent = (props) => {
    const { content, style } = props;
    return (
        <div style = { style }>
            <h1>{ content }</h1>
        </div>
    )
}

HeaderComponent.propTypes = {
    style: propTypes.object,
    content: propTypes.string.isRequired,
}

export default HeaderComponent;