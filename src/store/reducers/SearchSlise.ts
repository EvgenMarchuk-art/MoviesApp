import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchSearch} from '../../api/MoviesApi';

export type Search = {
  name: string;
};

export type SearchListState = {
  search: Search[];
  loading: boolean;
  error: string;
  id:number;
};

const initialState: SearchListState = {
  search: [],
  loading: true,
  error: '',
};

export const loadSearch = createAsyncThunk(
  'search',
  async ({search}: {search: string}) => {
    if (!search) {
      throw new Error('No search text');
    }

    const {data, status} = await fetchSearch(search);
    if (status !== 200) {
      throw new Error('Invalid search response');
    }
    return data.results;
  },
);

const searchSlise = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeLoader: (state, action) => {
      state.loading = action.payload;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
    clearError: state => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loadSearch.fulfilled, (state, action) => {
      state.search = [...state.search, ...action.payload];
    });
    builder.addCase(loadSearch.rejected, (state, action) => {
      state.error = action?.error?.message || '';
      const {id} = action.payload;
      state.search = state.search.filter(item => item.id !== id);
    });
  },
});

export const {clearError, addError, changeLoader} = searchSlise.actions;

export default searchSlise.reducer;
