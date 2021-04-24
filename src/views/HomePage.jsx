import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import api from '../api/movies-api';

class HomePage extends React.Component {
  state = {
    trending: [],
    src: 'https://image.tmdb.org/t/p/w500',
    location: useLocation,
  };

  componentDidMount() {
    this.fetchTrending();
  }

  fetchTrending = () => {
    api.getMoviesTrending().then(results => {
      this.setState({ trending: [...results] });
    });
  };

  render() {
    const { trending, src } = this.state;
    const { location } = this.props;

    return (
      <div className="container">
        <h2 className="page_title"> Today trending movies </h2>
        <ul className="movies_ul">
          {trending.map(({ id, poster_path, title, vote_average }) => (
            <Link
              key={id}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location.pathname },
              }}
            >
              <li className="movies_li">
                <img
                  className="movies_img"
                  src={`${src}${poster_path}`}
                  alt={title}
                />
                <p className="movies_title"> {title}</p>
                <p className="movies_rating">
                  <span className="rating">{vote_average}</span>
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomePage);
