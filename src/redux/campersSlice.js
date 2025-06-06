import { createSlice } from '@reduxjs/toolkit';

const campersSlice = createSlice({
    name: 'campers',
    initialState: {items: [], status: 'idle'},
    reducers: {
        setCampers(state, action) {
            state.items = action.payload;
        },
    }
})

export const { setCampers} = campersSlice.actions;
export default campersSlice.reducer;