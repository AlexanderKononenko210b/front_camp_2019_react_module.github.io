import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ErrorBoundaryComponent from "./component";
import { setError, setErrorInfo } from "./index";

class ErrorBoundaryContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidCatch(error, errorInfo) {
        setError(true);
        setErrorInfo(errorInfo);
    }

    render() {
        const { isError, errorInfo } = this.props;
        if (isError) {
            return (
                <ErrorBoundaryComponent
                    errorInfo = { errorInfo }>
                </ErrorBoundaryComponent>
            )
        }

    return this.props.children; 
    }
}

const mapStateToProps = (state) => {
    return {
        isError: state.errorReducer.isError,
        errorInfo: state.errorReducer.errorInfo
    }
}

const mapDispatchToProps = (dispatch) => ({
    setError: bindActionCreators(setError, dispatch),
    setErrorInfo: bindActionCreators(setErrorInfo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundaryContainer);