import React from "react";
import propTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => {
    const { style, content, onClickHandle } = props;
    return (
        <Button style = {style} onClick = {onClickHandle}>
            {content}
        </Button>
    )
}

ButtonComponent.propTypes = {
    style: propTypes.object,
    content: propTypes.string.isRequired,
    onClickHandle: propTypes.func.isRequired
}

export default ButtonComponent;