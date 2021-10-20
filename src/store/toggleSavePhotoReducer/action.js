import { actionTypes } from '../action-types';

const { TOGGLE_SAVE_PHOTO } = actionTypes;

export const toggleSavePhoto = (photoToSave) => (dispatch, getState) => {
  const state = getState();
  const { savedPhotos } = state.togglePhoto;
  const newSavedPhotos = { ...savedPhotos };

  if (savedPhotos[photoToSave.id]) {
    delete newSavedPhotos[photoToSave.id];
  }

  if (!savedPhotos[photoToSave.id]) {
    newSavedPhotos[photoToSave.id] = photoToSave;
  }

  dispatch({
    type: TOGGLE_SAVE_PHOTO,
    payload: newSavedPhotos,
  });
};
