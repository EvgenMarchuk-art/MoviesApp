import {combineReducers, configureStore} from '@reduxjs/toolkit';
import moviesListSlice from './reducers/MoviesSlise';
import favoritesList from './reducers/FavoritesSlise'


const rootReduser = combineReducers({
  moviesList: moviesListSlice,
  favoritesList: favoritesList,
});


export type RootState = ReturnType<typeof rootReduser>;

const store = configureStore({
  reducer: rootReduser,
});

export default store;
