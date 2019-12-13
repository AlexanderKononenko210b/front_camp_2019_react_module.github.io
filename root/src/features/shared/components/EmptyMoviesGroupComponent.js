import React from "react";
import propTypes from "prop-types";

import { HeaderComponent } from "../../shared/components";
import style from "../../../assets/style";

const EmptyMoviesGroupComponent = (props) => {
    const { containerStyle, content } = props;
    return (
        <div style = { containerStyle }>
            <HeaderComponent
                style = { style.headerMoviesEmpty }
                content = { content }>
            </HeaderComponent>
        </div>
    )
}

EmptyMoviesGroupComponent.propTypes = {
    containerStyle: propTypes.object,
    content: propTypes.string.isRequired
}

export default EmptyMoviesGroupComponent;