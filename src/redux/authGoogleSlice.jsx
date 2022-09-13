/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';


export const slice = createSlice({
  name: 'Auth',
  initialState: {
    signed:''
  },
  reducers: {
    AuthGoogleProvider(state, { payload }) {
      return {...state, signed: payload}
    }
  }
});

export const { AuthGoogleProvider} = slice.actions;

export const selectItem = state => state;

export default slice.reducer;
