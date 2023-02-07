import { StarFill, FilePlusFill } from 'react-bootstrap-icons';

function MovieCard({ movie, archivedMovies, setArchivedMovies, movies }) {
  const onClickHandler = (e) => {
    const targetId = e.target.id;
    movies.map((movie) => {
      if (movie.id === targetId) {
        if (movie.isArchived === false || movie.isArchived === undefined) {
          setArchivedMovies([...archivedMovies, movie]);
          movie.isArchived = true;
        } else {
          const newArr = archivedMovies.filter(
            (state) => state.id !== targetId
          );
          setArchivedMovies(newArr);
          console.log(typeof archivedMovies);
          movie.isArchived = false;
        }
      }
      console.log(movie.Title, movie.isArchived);
    });
  };
  return (
    <div className='col-ml-3 col-md-4 col-sm-5'>
      <div className='card'>
        <img
          src={movie.cover}
          onClick={onClickHandler}
          className='card-img-top'
          alt={movie.Title}
          id={movie.id}
        />
        <FilePlusFill
          className='sub_button'
          size={30}
          opacity={movie.isArchived === true ? 1 : 0.5}
        />

        <i className='bi bi-file-plus'></i>
        <div className='card-body'>
          <div className='d-flex justify-content-between'>
            <h5 className='card-title'>{movie.Title}</h5>
            <p className='rating d-flex align-items-center'>
              <StarFill color='gold' size={15} style={{ marginRight: '5px' }} />
              {movie.rating}
            </p>
          </div>
          <h5 className='year'>({movie.Year})</h5>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
