import axios from 'axios';
import { actionTypes } from '../action-types';

const {
  GET_SEARCH_PHOTOS_PENDING,
  GET_SEARCH_PHOTOS_SUCCESS,
  GET_SEARCH_PHOTOS_ERROR,
  GET_SEARCH_PHOTOS_TOTAL,
  GET_SEARCH_COLLECTIONS_PENDING,
  GET_SEARCH_COLLECTIONS_SUCCESS,
  GET_SEARCH_COLLECTIONS_ERROR,
  SEARCH_TERM,
} = actionTypes;

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const getSearchPhotos = () => async (dispatch, getState) => {
  const state = getState();
  const { searchTerm } = state.searchPhotos;
  const { page } = state.searchPhotos;
  try {
    dispatch({
      type: GET_SEARCH_PHOTOS_PENDING,
    });
    const data = await axios(
      `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${searchTerm}&page=${page}`
    );
    dispatch({
      type: GET_SEARCH_PHOTOS_SUCCESS,
      payload: data.data.results,
    });
    dispatch({
      type: GET_SEARCH_PHOTOS_TOTAL,
      payload: data.data.total,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_SEARCH_PHOTOS_ERROR,
    });
  }
};

export const getSearchCollections = () => async (dispatch, getState) => {
  const state = getState();
  const { searchTerm } = state.searchPhotos;
  try {
    dispatch({
      type: GET_SEARCH_COLLECTIONS_PENDING,
    });
    const data = await axios(
      `https://api.unsplash.com/search/collections?client_id=${accessKey}&query=${searchTerm}&per_page=30`
    );
    dispatch({
      type: GET_SEARCH_COLLECTIONS_SUCCESS,
      payload: data.data.results,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_SEARCH_COLLECTIONS_ERROR,
    });
  }
};

export const getSearchTerm = (searchTerm) => (dispatch, getState) => {
  dispatch({
    type: SEARCH_TERM,
    payload: searchTerm,
  });
};
