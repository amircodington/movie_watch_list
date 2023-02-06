import { useState } from 'react';
import ArchiveButtons from './ArchiveButtons';
import MoviesList from './MoviesList';

function Archive() {
  const [isArchive, setIsArchive] = useState(false);
  const [movies, setMovies] = useState([
    {
      Title: 'John Wick',
      Year: '2014',
      imdbID: 'tt2911666',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick: Chapter 2',
      Year: '2017',
      imdbID: 'tt4425200',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick: Chapter 3 - Parabellum',
      Year: '2019',
      imdbID: 'tt6146586',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick: Chapter 3 - Parabellum: HBO First Look',
      Year: '2019',
      imdbID: 'tt10275370',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick Chapter 2: Wick-vizzed',
      Year: '2017',
      imdbID: 'tt7161870',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: "John Wick: Don't F*#% with John Wick",
      Year: '2015',
      imdbID: 'tt5278630',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick: Kill Count',
      Year: '2017',
      imdbID: 'tt7161942',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: "John Wick: The Assassin's Code",
      Year: '2015',
      imdbID: 'tt5278698',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: 'John Wick: Car Fu Ride-Along',
      Year: '2017',
      imdbID: 'tt7161902',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
    {
      Title: "Retro Wick: Exploring the Unexpected Success of 'John Wick'",
      Year: '2017',
      imdbID: 'tt7161846',
      Type: 'movie',
      Poster:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
    },
  ]);

  const [archivedMovies, setArchivedMovies] = useState([]);

  return (
    <div className='archive'>
      <ArchiveButtons />
      <div>
        <MoviesList
          movies={movies}
          archivedMovies={archivedMovies}
          setArchivedMovies={setArchivedMovies}
          isArchive={isArchive}
          setIsArchive={setIsArchive}
        />
      </div>
    </div>
  );
}

export default Archive;
