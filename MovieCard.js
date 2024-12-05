import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "5px" }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "150px", height: "200px" }} />
      <h3>{movie.title}</h3>
      <p>Note: {movie.rating}/10</p>
      <Link to={`/movie/${movie.title}`} style={{ textDecoration: "none", color: "blue" }}>
        Voir les détails
      </Link>
    </div>
  );
};

export default MovieCard;
