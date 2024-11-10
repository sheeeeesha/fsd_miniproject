// src/actions.js
// actions.js
export const SET_CURRENT = 'SET_CURRENT';
export const SET_QUERY = 'SET_QUERY';
export const SET_PLACEHOLDER = 'SET_PLACEHOLDER';

export const setCurrent = (current) => ({
  type: SET_CURRENT,
  payload: current,
});

export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const setPlaceholder = (placeholder) => ({
  type: SET_PLACEHOLDER,
  payload: placeholder,
});
