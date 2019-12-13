import React from "react";
import propTypes from "prop-types";

const LabelComponent = (props) => {
    const { content, style } = props;
    return (
        <div style = { style }>
            <label>{ content }</label>
        </div>
    )
}

LabelComponent.propTypes = {
    style: propTypes.object,
    content: propTypes.string.isRequired,
}

export default LabelComponent;