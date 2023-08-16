import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/greetings');
  const { greeting } = response.data;
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    isLoading: false,
    error: false,
  },
  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchGreeting.fulfilled]: (state, { payload }) => {
      state.greeting = payload;
      state.isLoading = false;
    },
    [fetchGreeting.rejected]: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
