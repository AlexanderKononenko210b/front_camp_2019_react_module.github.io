import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import OptionComponent from "./component";
import { chooseSearchBtnStyle, chooseSortBtnStyle, setSearchOption, setSortOption } from "./actions";

import { ElementsOption } from "../../../../shared/constants";
//import style from "../../../../../assets/style";

class OptionContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    setOptions = (event) => {
        event.preventDefault();
        const data = event.target.id.split("_");
        if(data[0] == "search") {
            const option = data[1] == "left"
                ? ElementsOption.SEARCH_TITLE_VALUE
                : ElementsOption.SEARCH_GENRES_VALUE;
            const { setSearchOption } = this.props;
            setSearchOption(option);
        } else if(data[0] == "sort") {
            const option = data[1] == "left"
                ? ElementsOption.SORT_RELEASE_DATE_VALUE
                : ElementsOption.SORT_RATING_VALUE;
            const { setSortOption } = this.props;
            setSortOption(option);
        }
    }

    onClickHandle(event) {
        event.preventDefault();
        const data = event.target.id.split("_");
        const { chooseSearchBtnStyle, chooseSortBtnStyle } = this.props;
        const result = data[1] == "left";
        if(data[0] == "search") {
            chooseSearchBtnStyle(result);
        } else {
            chooseSortBtnStyle(result);
        }
        this.setOptions(event);
    }

    render() {
        const { isSearchLeftBtn, isSortLeftBtn } = this.props;
        return (
            <OptionComponent
                type = { this.props.type }
                isSearchLeftBtn = { isSearchLeftBtn }
                isSortLeftBtn = { isSortLeftBtn }
                onClickHandle = { this.onClickHandle }>
            </OptionComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSearchLeftBtn: state.listReducer.isSearchLeftBtn,
        isSortLeftBtn: state.listReducer.isSortLeftBtn
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        chooseSearchBtnStyle: bindActionCreators(chooseSearchBtnStyle, dispatch),
        chooseSortBtnStyle: bindActionCreators(chooseSortBtnStyle, dispatch),
        setSearchOption: bindActionCreators(setSearchOption, dispatch),
        setSortOption: bindActionCreators(setSortOption, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToState)(OptionContainer);