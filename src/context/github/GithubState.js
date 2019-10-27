import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  GET_USER,
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
   * * Search GitHub Users
   * @param text - user input
   *
   */
  const searchUsers = async text => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  /**
   * * Get GitHub a User Data
   * @param login  - GitHub username
   */
  const getUser = async login => {
    setLoading();

    const res = await axios
      .get(
        `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .catch(e => console.error(e.message));
    dispatch({ type: GET_USER, payload: res.data });
  };

  /**
   * * Get Users Repos
   */
  const getUserRepos = async login => {
    setLoading();
    const res = await axios
      .get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .catch(e => console.error(e.message));
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  /**
   * * Clear Users
   */
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  /**
   * * Show loading
   */
  const setLoading = () => dispatch({ type: SHOW_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
