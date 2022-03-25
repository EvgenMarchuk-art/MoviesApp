import {createSlice} from '@reduxjs/toolkit';



export type Favorites = {
  name: string;
};

export type FavoritesList = {
  favorites: Favorites[];
  isEnabled: boolean;
  title: string;
  img: string;
};
const initialState: {favorites: any[]} = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      const {id} = action.payload;
      state.favorites = state.favorites.filter(item => item.id !== id);
    },
  },
});

export const {addFavourite, removeFavourite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
