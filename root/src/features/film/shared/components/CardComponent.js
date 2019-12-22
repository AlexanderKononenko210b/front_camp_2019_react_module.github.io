import React from "react";
import propTypes from "prop-types";

import Card from "react-bootstrap/Card";
import style from "../../../../assets/style";

const CardComponent = (props) => {
    const { itemUrl, containerStyle, imgStyle, onClickHandler } = props;
    return (
        <div style={ containerStyle }>
            <Card style={ imgStyle } onClick = { onClickHandler }>
                <Card.Img src = {itemUrl} />
            </Card>
        </div>
    )
}

CardComponent.propTypes = {
    itemUrl: propTypes.string
}

export default CardComponent;