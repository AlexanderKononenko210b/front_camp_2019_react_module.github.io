import React, { Component } from "react";
import propTypes from "prop-types";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { LabelComponent } from "../../shared/components";

import { ElementsOption } from "../../shared/constants";
import style from "../../../assets/style";

class OptionContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            isSearchLeftBtn: true,
            isSortLeftBtn: true
        }
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle(event) {
        event.preventDefault();
        const data = event.target.id.split("_");
        if(data[0] == "search") {
            this.setState({
                isSearchLeftBtn: data[1] == "left"
            })
        } else {
            this.setState({
                isSortLeftBtn: data[1] == "left"
            })
        }

        this.props.onClickHandle(event);
    }

    render() {
        const leftBtn = this.props.type == ElementsOption.SEARCH_TYPE
            ? <Button id = {this.props.leftId} style = {this.state.isSearchLeftBtn ? style.optionCheckedBtn : style.optionUnCheckedBtn} onClick = {this.onClickHandle}>{this.props.contentLeft}</Button>
            : <Button id = {this.props.leftId} style = {this.state.isSortLeftBtn ? style.optionCheckedBtn : style.optionUnCheckedBtn} onClick = {this.onClickHandle}>{this.props.contentLeft}</Button>
        const rightBtn = this.props.type == ElementsOption.SEARCH_TYPE
            ? <Button id = {this.props.rightId} style = {this.state.isSearchLeftBtn ? style.optionUnCheckedBtn : style.optionCheckedBtn} onClick = {this.onClickHandle}>{this.props.contentRight}</Button>
            : <Button id = {this.props.rightId} style = {this.state.isSortLeftBtn ? style.optionUnCheckedBtn : style.optionCheckedBtn} onClick = {this.onClickHandle}>{this.props.contentRight}</Button>
        return (
            <div style = { this.props.optionContainerStyle }>
                <LabelComponent
                    style = { style.optionLabel }
                    content = { this.props.optionContent }>
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
}

export default OptionContainer;