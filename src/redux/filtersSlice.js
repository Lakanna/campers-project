import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    equipment: [],
  },
  reducers: {
    setFilters(state, action) {
      const { location, form, equipment } = action.payload;
      state.location = location;
      state.form = form;
      state.equipment = equipment;
    },
  },
});

export const { setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
