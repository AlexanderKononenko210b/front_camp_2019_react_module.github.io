import React from "react";
import propTypes from "prop-types";

import { OptionContainer } from "../../shared/components";
import { Content, ElementsOption } from "../../shared/constants";
import style from "../../../assets/style";

const SortOrderComponent = (props) => {
    const { optionOnClickHandle, searchCount } = props;

    return (
        <div style = { style.middleContainer }>
            <div style = { style.searchCount }>
                <label>{`${searchCount} ${Content.SEARCH_COUNT}`}</label>
            </div>
            <OptionContainer
                optionContent = { Content.OPTION_SORT_SPAN }
                contentLeft = { Content.OPTION_SORT_LEFT_BTN }
                contentRight = { Content.OPTION_SORT_RIGHT_BTN }
                leftId = { ElementsOption.SORT_OPTION_LEFT_ID }
                rightId = { ElementsOption.SORT_OPTION_RIGHT_ID }
                style = { style.optionButton }
                onClickHandle = { optionOnClickHandle }>
            </OptionContainer>
        </div>
    )
}

SortOrderComponent.propTypes = {
    optionOnClickHandle: propTypes.func.isRequired,
    searchCount: propTypes.number.isRequired
}

export default SortOrderComponent;
