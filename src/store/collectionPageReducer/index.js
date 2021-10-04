import { actionTypes } from 'store/action-types';

const initialState = {
  collectionPhotos: [],
  collectionId: '',
  page: 1,
  error: false,
  loading: false,
};

const {
  GET_COLLECTION_PHOTOS_PENDING,
  GET_COLLECTION_PHOTOS_SUCCESS,
  GET_COLLECTION_PHOTOS_ERROR,
  GET_COLLECTION_ID,
} = actionTypes;

export default function collectionPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COLLECTION_PHOTOS_PENDING:
      return { ...state, isLoading: true };

    case GET_COLLECTION_PHOTOS_SUCCESS:
      const arr = [...state.collectionPhotos, ...action.payload];
      const newArr = Array.from(new Set(arr.map((a) => a.id))).map((id) =>
        arr.find((a) => a.id === id)
      );
      return {
        ...state,
        collectionPhotos: newArr,
        isLoading: false,
        page: state.page + 1,
      };

    case GET_COLLECTION_PHOTOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case GET_COLLECTION_ID:
      return {
        ...state,
        collectionId: action.payload,
      };

    default:
      return state;
  }
}
