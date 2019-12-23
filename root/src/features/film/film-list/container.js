import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FilmListComponent from "./component";
import { movieSvc } from "../../../services";

import { asyncGetMovies } from "./actions";

class FilmListContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        const { movies } = this.props;
        const groupMovies = movieSvc.groupMovies(movies);
        const searchCount = movies.length;
        return (
            <FilmListComponent 
                movies = { groupMovies }
                searchCount = { searchCount }>
            </FilmListComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.listReducer.movies,
    }
}

const mapDispatchToProps = (dispatch) => ({
    asyncGetMovies: bindActionCreators(asyncGetMovies, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmListContainer));