import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Constants } from "../../shared/constants";
import MovieDetailComponent from "./component";
import { movieSvc } from "../../../services";
import { setMovieById, asyncGetMoviesByGenres, asyncGetDetailInfo, setMoviesByGenre } from "./index";

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    backIconOnClickHandle = (event) => {
        event.preventDefault();
        const { history } = this.props;
        const { setMovieById } = this.props;
        setMovieById(Constants.EMPTY_MOVIE);
        setMoviesByGenre([]);
        history.push("/search");
    }

    componentDidMount(){
        const key = this.props.match.params;
        const { asyncGetDetailInfo } = this.props;
        asyncGetDetailInfo(key.id);
    }

    render() {
        const { movie } = this.props;
        const movies = movieSvc.groupMovies(this.props.moviesByGenre);
        return (
            <MovieDetailComponent
                movie = { movie }
                movies = { movies }
                backIconOnClickHandle = { this.backIconOnClickHandle }
                movieOnClickHandle = { this.movieOnClickHandle }>
            </MovieDetailComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        moviesByGenre: state.detailReducer.moviesByGenre,
        movie: state.detailReducer.movie
    }
}

const mapDispatchToProps = (dispatch) => ({
    setMovieById: bindActionCreators(setMovieById, dispatch),
    asyncGetMoviesByGenres: bindActionCreators(asyncGetMoviesByGenres, dispatch),
    asyncGetDetailInfo: bindActionCreators(asyncGetDetailInfo, dispatch),
    setMoviesByGenre: bindActionCreators(setMoviesByGenre, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer));
