import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SHOW_LOADING
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  /**
   * * Search Users
   */

  /**
   * * Get Users
   */

  /**
   * * Get Repos
   */

  /**
   * * Clear Users
   */

  /**
   * * Show loading
   */

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.loading,
        repos: state.repos,
        loading: state.loading
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
