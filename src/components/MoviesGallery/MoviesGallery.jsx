import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';

class MoviesGallery extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    location: useLocation,
  };

  render() {
    const { src } = this.state;
    const { movies, location } = this.props;

    return (
      <div className="container">
        <ul className="movies_ul">
          {movies.map(({ id, poster_path, title, vote_average }) => (
            <Link
              key={id}
              to={{
                pathname: `/movies/${id}`,
                state: { from: `${location.pathname}` },
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

export default withRouter(MoviesGallery);
