import {
  SEARCH_USERS,
  GET_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SHOW_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, loading: true };

    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };

    case SHOW_LOADING:
      return { ...state, loading: true };

    case SHOW_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
