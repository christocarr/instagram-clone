import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homePhotos from './homePageReducer/index';
import explorePhotos from './explorePageReducer/index';
import searchPhotos from './searchResultsPageReducer/index';
import userData from './userPageReducer/index';

const reducers = combineReducers({
  homePhotos,
  explorePhotos,
  searchPhotos,
  userData,
});

export const store = createStore(reducers, applyMiddleware(thunk));
