import axios from 'axios';

const BASE_URL = "https://yts.am/api/v2"
const LIST_MOVIES = `${BASE_URL}/list_movies.json?sort_by=year`

export const getMovies = async (limit, rating) => {
  try {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(LIST_MOVIES, {
      params: { 
        limit,
        rating
      }
    });
    return movies;
  } catch (error) {
    console.log(error)
  }
}
