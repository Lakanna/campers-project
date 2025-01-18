import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectSearchParams } from './selectors.js';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const searchParams = selectSearchParams(state);

      const response = await axios.get('', { params: searchParams });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchbyId',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
