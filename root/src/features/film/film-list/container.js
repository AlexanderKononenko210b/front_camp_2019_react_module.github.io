import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilmListComponent from "./component";
//import { Constants, ElementsOption } from "../../shared/constants";
import { movieSvc } from "../../../services";

import { asyncGetMovies } from "./actions";

class FilmListContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    //searchOnClickHandle = (event) => {
    //    event.preventDefault();
    //   const { searchOption, sortOption, searchValue } = this.props;
    //    const { asyncGetMovies } = this.props;
    //    const params = Object.entries({
    //        sortBy: sortOption,
    //        sortOrder: ElementsOption.SORT_ORDER_DESC,
    //        search: searchValue,
    //        searchBy: searchOption,
    //        limit: Constants.LIMIT_QUERY
    //    })
    //    asyncGetMovies(params);
    //}

    //searchOnChangeHandle = (event) => {
    //    event.preventDefault();
    //    const searchValue = event.target.value;
    //    const { setSearchValue } = this.props;
    //    setSearchValue(searchValue);
    //}

    //optionOnClickHandle = (event) => {
    //    event.preventDefault();
    //    const data = event.target.id.split("_");
    //    if(data[0] == "search") {
    //        const option = data[1] == "left"
    //            ? ElementsOption.SEARCH_TITLE_VALUE
    //            : ElementsOption.SEARCH_GENRES_VALUE;
    //        const { setSearchOption } = this.props;
    //        setSearchOption(option);
    //    } else if(data[0] == "sort") {
    //        const option = data[1] == "left"
    //            ? ElementsOption.SORT_RELEASE_DATE_VALUE
    //            : ElementsOption.SORT_RATING_VALUE;
    //        const { setSortOption } = this.props;
    //        setSortOption(option);
    //    }
    //}

    movieOnClickHandle = (event) => {
        event.preventDefault();
        const id = event.target.id;
        const { history } = this.props;
        history.push(`/film/${id}`);
    }

    render () {
        const { movies } = this.props;
        const groupMovies = movieSvc.groupMovies(movies);
        const searchCount = movies.length;
        return (
            <FilmListComponent 
                searchOnClickHandle = { this.searchOnClickHandle }
                searchOnChangeHandle = { this.searchOnChangeHandle }
                optionOnClickHandle = { this.optionOnClickHandle }
                movieOnClickHandle = { this.movieOnClickHandle }
                movies = { groupMovies }
                searchCount = { searchCount }>
            </FilmListComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.listReducer.movies,
        //searchOption: state.listReducer.searchOption,
        //sortOption: state.listReducer.sortOption,
        //searchValue: state.listReducer.searchValue
    }
}

const mapDispatchToProps = (dispatch) => ({
    asyncGetMovies: bindActionCreators(asyncGetMovies, dispatch),
    //setSearchOption: bindActionCreators(setSearchOption, dispatch),
    //setSortOption: bindActionCreators(setSortOption, dispatch),
    //setSearchValue: bindActionCreators(setSearchValue, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmListContainer));