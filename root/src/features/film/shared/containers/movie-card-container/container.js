import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ElementsOption, Constants } from "../../../../shared/constants";
import { setMovieById, asyncGetMoviesByGenres } from "../../../film-detail";
import MovieCardComponent from "./component";
import { movieSvc } from "../../../../../services";

class MovieCardContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    searchOnClickHandle = (id) => {
        const { history } = this.props;
        history.push(`/film/${id}`);
    }

    detailOnClickHandle = (id) => {
        const { moviesByGenre } = this.props;
        const movie = movieSvc.getMovieInfo(id, moviesByGenre);
        const { setMovieById, asyncGetMoviesByGenres } = this.props;
        setMovieById(movie);
        const params = Object.entries({
            filter: movie.genres,
            limit: Constants.LIMIT_QUERY
        })
        asyncGetMoviesByGenres(params);
    }

    render() {
        const { card, type } = this.props;
        return (
            <MovieCardComponent
            card = { card }
            onClickHandle = { type == ElementsOption.SEARCH_TYPE 
                ? () => this.searchOnClickHandle(card.id)
                : () => this.detailOnClickHandle(card.id)}>
            </MovieCardComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moviesByGenre: state.detailReducer.moviesByGenre,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setMovieById: bindActionCreators(setMovieById, dispatch),
    asyncGetMoviesByGenres: bindActionCreators(asyncGetMoviesByGenres, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieCardContainer));