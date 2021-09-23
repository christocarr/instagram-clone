import { actionTypes } from '../action-types';

const initialState = {
  userData: [],
  isLoading: false,
  error: false,
  userName: '',
};

const {
  GET_USER_DATA_PENDING,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_NAME,
} = actionTypes;

export default function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: [...action.payload],
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
    default:
      return state;
  }
}
