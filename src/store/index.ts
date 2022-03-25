import {combineReducers, configureStore} from '@reduxjs/toolkit';
import moviesListSlice from './reducers/MoviesSlise';
import favoritesList from './reducers/FavoritesSlise';
import searchSlise from './reducers/SearchSlise';

const rootReduser = combineReducers({
  moviesList: moviesListSlice,
  favoritesList: favoritesList,
  searchList: searchSlise,
});

export type RootState = ReturnType<typeof rootReduser>;

const store = configureStore({
  reducer: rootReduser,
});

export default store;
