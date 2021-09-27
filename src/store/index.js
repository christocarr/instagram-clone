import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homePhotos from './homePageReducer/index';
import explorePhotos from './explorePageReducer/index';
import searchPhotos from './searchResultsPageReducer/index';
import userData from './userPageReducer/index';
import togglePhoto from './toggleSavePhotoReducer/index';

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('state', serialisedState);
  } catch (err) {
    console.warn(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('state');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    console.warn(err);
    return undefined;
  }
}

const reducers = combineReducers({
  homePhotos,
  explorePhotos,
  searchPhotos,
  userData,
  togglePhoto,
});

const store = createStore(
  reducers,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
