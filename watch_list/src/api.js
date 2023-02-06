import axios from 'axios';

const Movie = async (netflix_id) => {
  const response = await axios.get(
    'https://unogs-unogs-v1.p.rapidapi.com/title/details',
    {
      headers: {
        'X-RapidAPI-Key': 'a4cbe7fda4msh1092c5a6540dadfp1341aajsna8c5666c1a35',
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
      },
      params: { netflix_id: netflix_id },
    }
  );
  //
  console.log(response);

  return response.data;

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //     return response.data;
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
};

export default Movie;
