import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import homePhotos from './homePageReducer/index';
import explorePhotos from './explorePageReducer/index';
import searchPhotos from './searchResultsPageReducer/index';
import userData from './userPageReducer/index';
import togglePhoto from './toggleSavePhotoReducer/index';
import collectionPhotos from './collectionPageReducer/index';
import theme from './themeReducer/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['togglePhoto', 'theme'],
};

const reducers = combineReducers({
  homePhotos,
  explorePhotos,
  searchPhotos,
  userData,
  togglePhoto,
  collectionPhotos,
  theme,
});

const pReducer = persistReducer(persistConfig, reducers);

const store = createStore(pReducer, applyMiddleware(thunk));

const persister = persistStore(store);

export { store, persister };
