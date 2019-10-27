import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      <Link
        to={`/user/${login}`}
        className='btn btn-bark btn-sm my-1'
        aria-label='more'>
        more
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
