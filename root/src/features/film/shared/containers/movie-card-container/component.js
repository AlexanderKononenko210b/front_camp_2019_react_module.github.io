import React from "react";
import propTypes from "prop-types";

import Card from "react-bootstrap/Card";
import style from "../../../../../assets/style";

const MovieCardComponent = (props) => {
    const { card, onClickHandle } = props;
    return (
        <Card style={style.card}>
            <Card.Img id = {card.id} onClick = { onClickHandle } variant="top" src = {card.poster_path} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.release_date.split("-")[0]}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{card.genres.join("&")}</Card.Subtitle>
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
