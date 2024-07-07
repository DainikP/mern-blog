import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    UpdateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    UpdateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UserDeleteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    UserDeleteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UserDeleteSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },

    UserSignOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  UpdateStart,
  UpdateSuccess,
  UpdateFailure,
  UserDeleteSuccess,
  UserDeleteStart,
  UserSignOutSuccess
} = userSlice.actions;

export default userSlice.reducer;
