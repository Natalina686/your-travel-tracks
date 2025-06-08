import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
  location: '',
  form: '',
  equipment: [],
  status: 'idle',
},
    reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setEquipment(state, action) {
      state.equipment = action.payload;
    },
    resetFilters(state) {
      state.location = '';
      state.form = '';
      state.equipment = [];
    },
  },
})

export const { setLocation, setForm, setEquipment, resetFilters} = filtersSlice.actions;
export default filtersSlice.reducer;