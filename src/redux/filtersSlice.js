import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    equipment: [],
    page: 1,
    limit: 4,
  },
  reducers: {
    setFilters(state, action) {
      const { location, form, equipment } = action.payload;
      state.location = location;
      state.form = form;
      state.equipment = equipment;
      state.page = 1;
    },
    setPage(state, action) {
      const page = action.payload;
      state.page = page;
    },
  },
});

export const { setFilters, setPage } = filtersSlice.actions;

export default filtersSlice.reducer;
