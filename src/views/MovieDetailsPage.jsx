import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import api from '../api/movies-api';
import Navigetion from '../components/Navigetion';
import routes from '../routes';

class MovieDetailsPage extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    release_date: null,
  };

  componentDidMount() {
    this.fetchDetails();
  }

  fetchDetails = () => {
    const { movieId } = this.props.match.params;

    api.getMovieDetails(movieId).then(result => {
      this.setState({ ...result });
    });
  };

  hendleGoBack = () => {
    const { location, history } = this.props;
    //     if (location.state && location.state.from) {
    //       return history.push(location.state.from);
    //  }
    history.push(location?.state?.from || history.push(routes.home));
  };

  render() {
    const {
      src,
      original_title,
      poster_path,
      overview,
      release_date,
      popularity,
      vote_average,
      vote_count,
      genres,
    } = this.state;
    const { match } = this.props;

    return (
      <div className="movie_div container">
        <button className="movie_btn" type="button" onClick={this.hendleGoBack}>
          &#9668; Back
        </button>
        <h2 className="movie_title">{original_title}</h2>
        {poster_path && (
          <img
            className="movie_img"
            src={`${src}${poster_path}`}
            alt={original_title}
          />
        )}

        <div className="movie_info">
          <p className="text">
            Release: <span className="data">{release_date}</span>
          </p>
          <h3 className="movie_overview">Overview </h3>
          <span className="text">{overview}</span>
          <p className="text">
            Popularity:{' '}
            <span className="data">{String(Math.round(popularity))}</span>
          </p>
          <p className="text">
            Rating: <span className="data">{vote_average}</span>
          </p>
          <p className="text">
            Count: <span className="data">{vote_count}</span>
          </p>
          <h3 className="text">Genres</h3>
          {genres
            ? genres.map(({ id, name }) => (
                <p key={id} className="data">
                  {name}
                </p>
              ))
            : `We don't have any ganres for this movie.`}
        </div>

        <Navigetion.NavMovieDetails match={match} />

        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
