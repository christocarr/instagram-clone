import { actionTypes } from '../action-types';

const initialState = {
  user: null,
  photos: [],
  isLoading: false,
  error: false,
  userName: '',
  page: 1,
};

const {
  GET_USER_DATA_PENDING,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  GET_USER_PHOTOS_PENDING,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_ERROR,
  CLEAR_USER_PHOTOS,
  SET_USER_NAME,
} = actionTypes;

export default function userPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case GET_USER_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        isLoading: false,
        page: state.page + 1,
      };
    case GET_USER_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case CLEAR_USER_PHOTOS:
      return {
        ...state,
        photos: [],
      };
    default:
      return state;
  }
}
