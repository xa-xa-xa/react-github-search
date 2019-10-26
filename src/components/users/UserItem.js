import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar logo'
        srcSet=''
        className='round-img'
        style={{ width: 60 }}
      />
      <h3>{login}</h3>
      <a href={html_url} className='btn btn-bark btn-sm my-1' aria-label='more'>
        more
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
