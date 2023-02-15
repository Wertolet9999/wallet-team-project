import { createSlice } from '@reduxjs/toolkit';



const statisticSlice = createSlice({
  name: 'transactions',
  initialState: {
    summary: null,
    isLoadingSummary: false,
    error: null,
  },

  extraReducers: {
    
  },
});

export const statisticReducer = statisticSlice.reducer;
