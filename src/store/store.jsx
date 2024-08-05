import { configureStore } from '@reduxjs/toolkit';
import populationReducer from '../store/populationSlice';
export const store = configureStore({
  reducer: {
    population: populationReducer
  }
});

export default store;