import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_ITEMS_SUCCESS:
      return {...state, items: action.payload, loading: false, error: null};
    case FETCH_ITEMS_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default reducer;
