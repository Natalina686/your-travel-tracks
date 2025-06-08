import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('favorites')) || [],
  status: 'idle',
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.items.includes(camperId)) {
        state.items = state.items.filter((id) => id !== camperId);
      } else {
        state.items.push(camperId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    setFavorites(state, action) {
      state.items = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;