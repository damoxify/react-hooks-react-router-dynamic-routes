
import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(params.movieId));

  return (
    <div>
      {movie ? (
        <>
          <h3>{movie.title}</h3>
          <p>ID: {movie.id}</p>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default MovieShow;
