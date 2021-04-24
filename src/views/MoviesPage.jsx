import React from 'react';
import api from '../api/movies-api';
import Searchbar from '../components/Searchbar/Searchbar';
import Loader from '../components/Loader';
import Button from '../components/Button/Button';
import scrollTo from '../components/scrollTo';
import MoviesGallery from '../components/MoviesGallery';
import Nothing from '../components/Nothing';

class MoviesPage extends React.Component {
  state = {
    movies: [],
    page: 1,
    query: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query && query) {
      this.feachMovies();
    }
  }

  formSubmitQuery = search => {
    this.setState({ query: search, movies: [], page: 1, error: null });
  };

  feachMovies = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    api
      .getSerchMovies(query, page)
      .then(response => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...response.data.results],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const renderBtn = movies.length > 0 && !isLoading;
    const nothing = movies.length === 0;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitQuery} />

        <MoviesGallery movies={movies} />

        {isLoading && <Loader isLoading={isLoading} />}

        {renderBtn && <Button onClick={this.feachMovies} scroll={scrollTo()} />}

        {error && <h1>{error}</h1>}

        {nothing && <Nothing />}
      </div>
    );
  }
}

export default MoviesPage;
