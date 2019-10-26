import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search users...'
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-danger btn-block' />
        </form>
      </div>
    );
  }
}

export default Search;
