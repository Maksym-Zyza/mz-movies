import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '523a15ded98cd05fab36993344058e43';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

// список популярных фильмов на сегодня для создания коллекции на главной странице
const getMoviesTrending = async () => {
  try {
    const url = { url: `trending/movie/day` };
    const { data } = await axios(url);
    return data.results;
  } catch (error) {
    alert(error);
    return [];
  }
};

// поиск кинофильма по ключевому слову на странице фильмов
async function getSerchMovies(query, page) {
  try {
    const url = { url: 'search/movie', params: { query, page } };
    const response = await axios(url);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

getSerchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

// запрос полной информации о фильме для страницы кинофильма
async function getMovieDetails(movie_id) {
  try {
    const url = { url: `movie/${movie_id}` };
    const { data } = await axios(url, movie_id);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос информации о актёрском составе для страницы кинофильма
async function getMovieCredits(movie_id) {
  try {
    const url = { url: `movie/${movie_id}/credits` };
    const response = axios(url, movie_id);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос обзоров для страницы кинофильма
async function getMoviesReviews(movie_id) {
  try {
    const url = { url: `movie/${movie_id}/reviews` };
    const response = axios(url, movie_id);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

const api = {
  getMoviesTrending,
  getSerchMovies,
  getMovieDetails,
  getMovieCredits,
  getMoviesReviews,
};

export default api;
