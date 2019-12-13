import React from "react";
import propTypes from "prop-types";

import Card from "react-bootstrap/Card";
import style from "../../../assets/style";

const MovieCardComponent = (props) => {
    const { itemUrl, itemReleaseDate, itemGenre, itemTitle, onClickHandle } = props;
    return (
        <Card style={style.card} onClick = { onClickHandle }>
            <Card.Img variant="top" src = {itemUrl} />
            <Card.Body>
                <Card.Title>{itemTitle}</Card.Title>
                <Card.Text>{itemReleaseDate.split("/")[2]}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{itemGenre}</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

MovieCardComponent.propTypes = {
    itemUrl: propTypes.string,
    itemReleaseDate: propTypes.string,
    itemGenre: propTypes.string,
    itemTitle: propTypes.string,
    onClickHandle: propTypes.func.isRequired
}

export default MovieCardComponent;
