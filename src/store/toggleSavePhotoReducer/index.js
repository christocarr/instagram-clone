import { actionTypes } from '../action-types';

const initialState = {
  savedPhotos: [],
};

const { TOGGLE_SAVE_PHOTO } = actionTypes;

export default function toggleSavePhotoReducer(state = initialState, action) {
  if (action.type === TOGGLE_SAVE_PHOTO) {
    return {
      ...state,
      savedPhotos: [...action.payload],
    };
  }
  return state;
}
