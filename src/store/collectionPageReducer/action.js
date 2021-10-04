import axios from 'axios';
import { actionTypes } from 'store/action-types';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const {
  GET_COLLECTION_PHOTOS_PENDING,
  GET_COLLECTION_PHOTOS_SUCCESS,
  GET_COLLECTION_PHOTOS_ERROR,
  GET_COLLECTION_ID,
} = actionTypes;

export const getCollectionPhotos = () => async (dispatch, getState) => {
  const { collectionPhotos } = getState();
  const page = collectionPhotos.page;
  const collectionId = collectionPhotos.collectionId;

  try {
    dispatch({
      type: GET_COLLECTION_PHOTOS_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/collections/${collectionId}/photos?client_id=${accessKey}&page=${page}`
    );
    dispatch({
      type: GET_COLLECTION_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_COLLECTION_PHOTOS_ERROR,
    });
  }
};

export const getCollectionId = (collectionId) => (dispatch, getState) => {
  dispatch({
    type: GET_COLLECTION_ID,
    payload: collectionId,
  });
};
