import {
  SEARCH_USERS,
  GET_USER,
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

    case CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };

    default:
      return state;
  }
};
