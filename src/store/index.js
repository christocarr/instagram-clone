import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homePhotos from './homePageReducer/index';
import explorePhotos from './explorePageReducer/index';
import searchPhotos from './searchResultsPageReducer/index';

const reducers = combineReducers({
  homePhotos,
  explorePhotos,
  searchPhotos,
});

export const store = createStore(reducers, applyMiddleware(thunk));
