import React from "react";
import propTypes from "prop-types";
import style from "../../../../../assets/style";
import { ElementsOption, Content } from "../../../../shared/constants";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { LabelComponent } from "../../components";

const OptionComponent = (props) => {
    const { isSearchLeftBtn, isSortLeftBtn, type, onClickHandle } = props;
    const optionContent = type == ElementsOption.SEARCH_TYPE ? Content.OPTION_SEARCH_SPAN : Content.OPTION_SORT_SPAN;
    const contentLeft = type == ElementsOption.SEARCH_TYPE ? Content.OPTION_SEARCH_LEFT_BTN : Content.OPTION_SORT_LEFT_BTN;
    const contentRight = type == ElementsOption.SEARCH_TYPE ? Content.OPTION_SEARCH_RIGHT_BTN : Content.OPTION_SORT_RIGHT_BTN;
    const leftId = type == ElementsOption.SEARCH_TYPE ? ElementsOption.SEARCH_OPTION_LEFT_ID : ElementsOption.SORT_OPTION_LEFT_ID;
    const rightId = type == ElementsOption.SEARCH_TYPE ? ElementsOption.SEARCH_OPTION_RIGHT_ID : ElementsOption.SORT_OPTION_RIGHT_ID;
    const optionContainerStyle = type == ElementsOption.SEARCH_TYPE ? style.searchOptionContainerStyle : style.sortOptionContainerStyle;
    const leftBtn = type == ElementsOption.SEARCH_TYPE
            ? <Button id = {leftId} style = {isSearchLeftBtn ? style.optionCheckedBtn : style.optionUnCheckedBtn} onClick = {onClickHandle}>{contentLeft}</Button>
            : <Button id = {leftId} style = {isSortLeftBtn ? style.optionCheckedBtn : style.optionUnCheckedBtn} onClick = {onClickHandle}>{contentLeft}</Button>
    const rightBtn = type == ElementsOption.SEARCH_TYPE
            ? <Button id = {rightId} style = {isSearchLeftBtn ? style.optionUnCheckedBtn : style.optionCheckedBtn} onClick = {onClickHandle}>{contentRight}</Button>
            : <Button id = {rightId} style = {isSortLeftBtn ? style.optionUnCheckedBtn : style.optionCheckedBtn} onClick = {onClickHandle}>{contentRight}</Button>
    return (
        <div style = { optionContainerStyle }>
                <LabelComponent
                    style = { style.optionLabel }
                    content = { optionContent }>
                </LabelComponent>
                <div style = { style.optionButtonGroup}>
                    <ButtonGroup size="sm" className="mt-3">
                        { leftBtn }
                        { rightBtn }
                    </ButtonGroup>
                </div>
            </div>
    )
}

export default OptionComponent;
