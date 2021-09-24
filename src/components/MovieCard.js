import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ movie }) {
  return (
    <section className="mohamed">
      <Card style={{ width: "300px", height: "400px" }}>
        <Card.Img src={movie.posterurl} style={{ height: "100%" }} />
        <div className="caramel">
          {" "}
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <ReactStars size={35} value={movie.rating} edit={false} />
        </div>
      </Card>
    </section>
  );
}

export default MovieCard;
