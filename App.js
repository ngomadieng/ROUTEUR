import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails.js";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovie] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://i.scdn.co/image/ab67616d0000b273a883e26f90ab617c91b90e56",
      rating: 9,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "The Matrix",
      description: "A sci-fi classic directed by the Wachowskis.",
      posterURL: "https://i.scdn.co/image/ab67616d0000b273cb10bbc00c7732aec1b81fb2",
      rating: 8,
      trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const filterByTitle = (title) => {
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()))
    );
  };

  const filterByRating = (rating) => {
    setFilteredMovies(movies.filter((movie) => movie.rating >= rating));
  };

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Application de Cinéma</h1>
        <Link to="/" style={{ textDecoration: "none", fontSize: "20px" }}>Accueil</Link>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter onFilterTitle={filterByTitle} onFilterRating={filterByRating} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
