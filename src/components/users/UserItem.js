import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          srcSet=''
          className='round-img'
          style={{ width: 60 }}
        />
        <h3>{login}</h3>
        <a
          href={html_url}
          className='btn btn-bark btn-sm my-1'
          aria-label='more'>
          more
        </a>
      </div>
    );
  }
}

export default UserItem;
