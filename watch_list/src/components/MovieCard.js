function MovieCard({ movie }) {
  return (
    <div className='col-3'>
      <div className='card'>
        <img src={movie.Poster} className='card-img-top' alt={movie.Title} />
        <i className='bi bi-file-plus'></i>
        <div className='card-body'>
          <h5 className='card-title'>{movie.Title}</h5>
          <h5 className='year'>{movie.Year}</h5>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
