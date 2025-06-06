import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {items: [], status: 'idle'},
    reducers: {
        setFavorites(state, action) {
            state.items = action.payload;
        },
    }
})

export const { setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;