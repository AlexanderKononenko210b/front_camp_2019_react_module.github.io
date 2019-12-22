import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ElementsOption, Constants } from "../../../shared/constants";
import { asyncGetMovies, setSearchValue } from "../index";
import SearchComponent from "./component";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    searchOnClickHandle = (event) => {
        event.preventDefault();
        const { searchOption, sortOption, searchValue } = this.props;
        const { asyncGetMovies } = this.props;
        const params = Object.entries({
            sortBy: sortOption,
            sortOrder: ElementsOption.SORT_ORDER_DESC,
            search: searchValue,
            searchBy: searchOption,
            limit: Constants.LIMIT_QUERY
        })
        asyncGetMovies(params);
    }

    searchOnChangeHandle = (event) => {
        event.preventDefault();
        const searchValue = event.target.value;
        const { setSearchValue } = this.props;
        setSearchValue(searchValue);
    }

    render() {
        return(
            <SearchComponent 
                searchOnClickHandle = { this.searchOnClickHandle }
                searchOnChangeHandle = { this.searchOnChangeHandle }>
            </SearchComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchOption: state.listReducer.searchOption,
        sortOption: state.listReducer.sortOption,
        searchValue: state.listReducer.searchValue
    }
}

const mapDispatchToProps = (dispatch) => ({
    asyncGetMovies: bindActionCreators(asyncGetMovies, dispatch),
    setSearchValue: bindActionCreators(setSearchValue, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);