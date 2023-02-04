function MovieCard({ movie }) {
  return (
    <div className='card'>
      <img src={movie.large_image} class='card-img-top' alt={movie.title} />
      <i class='bi bi-file-plus'></i>
      <div class='card-body'>
        <h5 class='card-title'>{movie.title}</h5>
        <h5 class='rating'>{movie.rating}</h5>
        <h5 class='year'>{movie.year}</h5>
      </div>
    </div>
  );
}

export default MovieCard;
