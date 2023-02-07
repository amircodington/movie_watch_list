import { useState } from 'react';
import ArchiveButtons from './ArchiveButtons';
import MoviesList from './MoviesList';

function Archive() {
  const [isArchive, setIsArchive] = useState(false);
  const [movies, setMovies] = useState([
    {
      Title: 'Top Gun',
      Year: '2022',
      id: 'topgun_1',
      rating: '6.5/10',
      cover:
        'https://www.udiscovermusic.com/wp-content/uploads/2022/05/maverick-cover-820x820.jpg',
      isArchive: false,
    },

    {
      Title: 'Batman',
      Year: '2022',
      id: 'batman_2',
      rating: '8.7/10',
      cover:
        'https://cdn.prod.www.spiegel.de/images/6f7344c7-a3e5-4c67-a553-20757ad0c7b6_w1200_r1_fpx68_fpy36.jpg',
      isArchive: false,
    },
    {
      Title: 'Interstellar',
      Year: '2012',
      id: 'interstellar_3',
      rating: '9.3/10',
      cover:
        'https://postpace.io/blog/wp-content/uploads/2020/12/squar-interstellar.jpg',
      isArchive: false,
    },
    {
      Title: 'Inception',
      Year: '2010',
      id: 'inception_4',
      rating: '9.7/10',
      cover:
        'https://static.kino.de/wp-content/uploads/2020/06/inception-2010-filmplakat-rcm1200x1200u.jpg',
      isArchive: false,
    },
    {
      Title: 'Superman',
      Year: '2013',
      id: 'superman_5',
      rating: '6.4/10',
      cover:
        'https://www.buzzfeed.de/bilder/2022/03/10/92002678/28417248-superman-clark-kent-film-man-of-steel-usa-zack-snyder-henry-cavill-1Pxh566DXNec.jpg',
      isArchive: false,
    },
    {
      Title: 'Glass Onion',
      Year: '2013',
      id: 'glassOnion_6',
      rating: '6.4/10',
      cover:
        'https://cdn.vox-cdn.com/thumbor/munBoAVi-E0HNCbzZ6up4z87HIY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24221085/GlassOnion_Netflix_Getty_Ringer.jpg',
      isArchive: false,
    },
    {
      Title: 'Fast and Furious',
      Year: '2001',
      id: 'ffcr_7',
      rating: '6.8/10',
      cover:
        'https://www.codemasters.com/wp-content/uploads/2020/05/FFCR_SE-KA-Portrait_RGB.png',
      isArchive: false,
    },
    {
      Title: 'Joker',
      Year: '2020',
      id: 'joker_8',
      rating: '9.5/10',
      cover:
        'https://cdn.prod.www.spiegel.de/images/aa7f1473-0001-0004-0000-000001462355_w1200_r1_fpx69.98_fpy54.99.jpg',
      isArchive: false,
    },
  ]);

  const [archivedMovies, setArchivedMovies] = useState([]);

  return (
    <div className='archive'>
      <ArchiveButtons isArchive={isArchive} setIsArchive={setIsArchive} />
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
