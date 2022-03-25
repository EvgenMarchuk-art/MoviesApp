import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMovies} from '../../api/MoviesApi';

export type Movies = {
  name: string;
};

export type MoviesListState = {
  movies: Movies[];
  page: number;
  loading: boolean;
  error: string;
  id: number;
};

const initialState: MoviesListState = {
  movies: [],
  loading: true,
  error: '',
  page: 1,
  id:0,
};

export const loadMovies = createAsyncThunk(
  'movies',
  async ({initialPageNumber}: {initialPageNumber?: number}, thunkApi) => {
    const {moviesList}: any = thunkApi.getState();
    const {data} = await fetchMovies(initialPageNumber || moviesList.page);
    return data.results;
  },
);

const moviesSlise = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loadMovies.fulfilled, (state, action) => {
      state.movies = [...state.movies, ...action.payload];
      state.page += 1;
    });
    builder.addCase(loadMovies.rejected, (state, action) => {
      console.log('error', action.error);
      state.error = action.payload as string;
    });
  },
});

export default moviesSlise.reducer;
