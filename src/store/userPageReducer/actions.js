import axios from 'axios';
import { actionTypes } from '../action-types';

const { GET_USER_DATA_PENDING, GET_USER_DATA_SUCCESS, GET_USER_DATA_ERROR } =
  actionTypes;

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const getUserData = (userName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_DATA_PENDING,
    });
    const { data } = await axios(
      `https://api.unsplash.com/search/users?client_id=${accessKey}&query=${userName}&per_page=10`
    );
    dispatch({
      type: GET_USER_DATA_SUCCESS,
      payload: data.results,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_USER_DATA_ERROR,
    });
  }
};
