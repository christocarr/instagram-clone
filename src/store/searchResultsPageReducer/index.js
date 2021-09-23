import { actionTypes } from '../action-types';

const initialState = {
  searchPhotos: [],
  isLoading: false,
  error: false,
  page: 1,
  searchTerm: '',
};

const {
  GET_SEARCH_PHOTOS_PENDING,
  GET_SEARCH_PHOTOS_SUCCESS,
  GET_SEARCH_PHOTOS_ERROR,
  SEARCH_TERM,
} = actionTypes;

export default function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SEARCH_PHOTOS_SUCCESS:
      return {
        ...state,
        searchPhotos: [...state.searchPhotos, ...action.payload],
        isLoading: false,
        page: state.page + 1,
      };
    case GET_SEARCH_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
}
