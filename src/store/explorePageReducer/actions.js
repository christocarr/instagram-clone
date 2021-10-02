import axios from 'axios';
import { actionTypes } from '../action-types';

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const {
  GET_EXPLORE_PHOTOS_PENDING,
  GET_EXPLORE_PHOTOS_SUCCESS,
  GET_EXPLORE_PHOTOS_ERROR,
} = actionTypes;

export const getExplorePhotos = () => async (dispatch, getState) => {
  const state = getState();
  const page = state.explorePhotos.page;
  try {
    dispatch({
      type: GET_EXPLORE_PHOTOS_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10&page=${page}`
    );
    dispatch({
      type: GET_EXPLORE_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_EXPLORE_PHOTOS_ERROR,
    });
  }
};
