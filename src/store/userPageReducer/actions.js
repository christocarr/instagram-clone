import axios from 'axios';
import { actionTypes } from '../action-types';

const {
  GET_USER_DATA_PENDING,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  GET_USER_PHOTOS_PENDING,
  GET_USER_PHOTOS_SUCCESS,
  GET_USER_PHOTOS_ERROR,
  CLEAR_USER_PHOTOS,
} = actionTypes;

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const getUserData = (userName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_DATA_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/users/${userName}?client_id=${accessKey}`
    );
    dispatch({
      type: GET_USER_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  }
};

export const getUserPhotos = (userName) => async (dispatch, getState) => {
  const { userData } = getState();
  try {
    dispatch({
      type: GET_USER_PHOTOS_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/users/${userName}/photos/?client_id=${accessKey}&page=${userData.page}`
    );
    dispatch({
      type: GET_USER_PHOTOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_USER_PHOTOS_ERROR,
    });
  }
};

export const clearUserPhotos = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_USER_PHOTOS,
  });
};
