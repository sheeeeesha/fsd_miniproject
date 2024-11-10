// reducer.js
import { SET_CURRENT, SET_QUERY, SET_PLACEHOLDER } from '../src/action';

const initialState = {
  current: 'Do Something Fun',
  query: '',
  placeholder: 'places to go, things to do...',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_PLACEHOLDER:
      return { ...state, placeholder: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
