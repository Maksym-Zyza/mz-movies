import React from 'react';
import api from '../api/movies-api';

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const { movieId } = this.props.match.params;

    api
      .getMoviesReviews(movieId)
      .then(response => {
        this.setState({ reviews: [...response.data.results] });
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  };

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <ul>
          {reviews.length > 0
            ? reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3 className="data">{author}</h3>
                  <p className="text">{content}</p>
                </li>
              ))
            : `We don't have any reviews for this movie.`}
        </ul>
      </div>
    );
  }
}

export default Reviews;
