import { actionTypes } from '../action-types';

const initialState = {
  explorePhotos: [],
  isLoading: false,
  error: false,
  page: 1,
};

const {
  GET_EXPLORE_PHOTOS_PENDING,
  GET_EXPLORE_PHOTOS_SUCCESS,
  GET_EXPLORE_PHOTOS_ERROR,
} = actionTypes;

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXPLORE_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EXPLORE_PHOTOS_SUCCESS:
      return {
        ...state,
        explorePhotos: [...state.explorePhotos, ...action.payload],
        isLoading: false,
        page: state.page + 1,
      };
    case GET_EXPLORE_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
