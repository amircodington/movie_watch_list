import MovieCard from './MovieCard';
// import { useState } from 'react';

function MoviesList({
  movies,
  archivedMovies,
  setArchivedMovies,
  isArchive,
  setIsArchive,
}) {
  return (
    <div className='row'>
      {isArchive === false
        ? movies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              movies={movies}
              archivedMovies={archivedMovies}
              setArchivedMovies={setArchivedMovies}
            />
          ))
        : archivedMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              movies={movies}
              archivedMovies={archivedMovies}
              setArchivedMovies={setArchivedMovies}
            />
          ))}
    </div>
  );
}

export default MoviesList;
