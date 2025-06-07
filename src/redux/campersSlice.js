import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../services/campersApi';

export const loadCampers = createAsyncThunk('campers/loadCampers', async () => {
    const response = await fetchCampers();
    return response.data;
})

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
        
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadCampers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(loadCampers.fulfilled, (state, action) => {
            state.status= 'succeeded';
            state.items = action.payload;
        })
        .addCase(loadCampers.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
       
})

export default campersSlice.reducer;