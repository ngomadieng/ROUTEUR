import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <h2>Film introuvable</h2>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default MovieDetails;
