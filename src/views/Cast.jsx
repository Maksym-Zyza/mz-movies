import React from 'react';
import api from '../api/movies-api';
import defaultImg from '../img/default.jpg';
import Loader from '../components/Loader';

class Cast extends React.Component {
  state = {
    src: 'https://image.tmdb.org/t/p/w500',
    isLoading: false,
    cast: [],
  };

  componentDidMount() {
    this.fetchCredits();
  }

  fetchCredits = () => {
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });

    api
      .getMovieCredits(movieId)
      .then(response => {
        this.setState({ cast: [...response.data.cast] });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { cast, src, isLoading } = this.state;

    return (
      <>
        <div className="container">
          <ul className="cast_ul">
            {cast.map(({ cast_id, profile_path, name, character }) => (
              <li key={cast_id} className="cast_li">
                {profile_path ? (
                  <img
                    src={`${src}${profile_path}`}
                    alt="Movie poster"
                    className="cast_img"
                  />
                ) : (
                  <img
                    src={defaultImg}
                    alt="Was not found"
                    className="cast_img"
                  />
                )}
                <h3 className="cast_title">{name}</h3>
                <p className="cast_text">{character}</p>
              </li>
            ))}
          </ul>
        </div>

        {isLoading && <Loader isLoading={isLoading} />}
      </>
    );
  }
}

export default Cast;
