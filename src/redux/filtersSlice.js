import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {items: [], status: 'idle'},
    reducers: {
        setFilters(state, action) {
            state.items = action.payload;
        },
    }
})

export const { setFilters} = filtersSlice.actions;
export default filtersSlice.reducer;