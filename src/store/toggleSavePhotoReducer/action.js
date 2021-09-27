import { actionTypes } from '../action-types';

const { TOGGLE_SAVE_PHOTO } = actionTypes;

export const toggleSavePhoto = (photoToSave) => (dispatch, getState) => {
  const state = getState();
  const { savedPhotos } = state.togglePhoto;

  const photoExists = savedPhotos.find((p) => p.id === photoToSave.id);
  let photosArr = [];
  if (photoExists) {
    photosArr = savedPhotos.filter((ph) => ph.id !== photoToSave.id);
  }
  if (!photoExists) {
    photosArr = [...savedPhotos, photoToSave];
  }

  dispatch({
    type: TOGGLE_SAVE_PHOTO,
    payload: photosArr,
  });
};
