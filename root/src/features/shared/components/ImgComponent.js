import React from "react";
import propTypes from "prop-types";

const ImgComponent = (props) => {
    const { imgContainerStyle, imgStyle, url, onClickHandler } = props;
    return (
        <div style = { imgContainerStyle } onClick = { onClickHandler }>
            <img style = { imgStyle } src = { url }></img>
        </div>
    )
}

ImgComponent.propTypes = {
    imgContainerStyle: propTypes.object,
    imgStyle: propTypes.object,
    url: propTypes.string.isRequired,
    onClickHandler: propTypes.func.isRequired
}

export default ImgComponent;