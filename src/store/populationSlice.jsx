import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPopulation = createAsyncThunk('population/fetchPopulation', async () => {
  try {
    const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    return response.data.data; 
  } catch (error) {
    return Promise.reject(error.message || 'Failed to fetch data.');
  }
});

const populationSlice = createSlice({
  name: 'population',
  initialState: {
    data: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopulation.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null; 
      })
      .addCase(fetchPopulation.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default populationSlice.reducer;
