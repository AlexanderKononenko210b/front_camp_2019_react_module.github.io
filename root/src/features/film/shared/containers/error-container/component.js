import React from "react";
import Alert from "react-bootstrap/Alert"

const ErrorBoundaryComponent = (props) => {
    const { errorInfo } = this.props;
    return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {errorInfo.componentStack}
            </details>
        </Alert>
    )
}

export default ErrorBoundaryComponent;