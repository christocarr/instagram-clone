import axios from 'axios';
import { actionTypes } from '../action-types';

const {
  GET_HOME_PHOTOS_PENDING,
  GET_HOME_PHOTOS_SUCCESS,
  GET_HOME_PHOTOS_ERROR,
} = actionTypes;

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const getHomePhotos = () => async (dispatch, getState) => {
  const state = getState();
  const { page } = state.homePhotos;
  try {
    dispatch({
      type: GET_HOME_PHOTOS_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`
    );
    dispatch({
      type: GET_HOME_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_HOME_PHOTOS_ERROR,
    });
  }
};
