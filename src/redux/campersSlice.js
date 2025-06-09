import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers } from '../services/campersApi';

export const loadCampers = createAsyncThunk(
    'campers/loadCampers', 
    async (_, {getState}) => {
    const {filters} = getState();

    const params = new URLSearchParams();

    if (filters.location) params.append('location', filters.location);
    if (filters.form) params.append('form', filters.form);
    filters.equipment.forEach(item => params.append(item, true));

    const response = await fetchCampers(params.toString());
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
            state.items = action.payload.items;
        })
        .addCase(loadCampers.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
       
})

export default campersSlice.reducer;