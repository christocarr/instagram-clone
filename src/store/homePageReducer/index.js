import { actionTypes } from '../action-types';

const initialState = {
  photos: [],
  isLoading: false,
  error: false,
  page: 1,
};

const {
  GET_HOME_PHOTOS_PENDING,
  GET_HOME_PHOTOS_SUCCESS,
  GET_HOME_PHOTOS_ERROR,
} = actionTypes;

export default function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_PHOTOS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_HOME_PHOTOS_SUCCESS:
      const arr = [...state.photos, ...action.payload];
      const newArr = Array.from(new Set(arr.map((a) => a.id))).map((id) =>
        arr.find((a) => a.id === id)
      );
      return {
        ...state,
        photos: newArr,
        isLoading: false,
        page: state.page + 1,
      };
    case GET_HOME_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
}
