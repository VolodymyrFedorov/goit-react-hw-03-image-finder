import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChangeInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Write a serches');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={css.formButton}></button>

          <input
            className={css.input}
            type="text"
            value={this.state.query}
            onChange={this.handleChangeInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
