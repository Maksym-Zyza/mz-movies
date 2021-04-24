import React from 'react';
import st from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // передача пропа в MoviesPage
    this.props.onSubmit(this.state.search);

    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <header className={st.Searchbar}>
        <form onSubmit={this.handleSubmit} className={st.SearchForm}>
          <button type="submit" className={st.SearchForm_button}>
            <span className={st.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={st.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
