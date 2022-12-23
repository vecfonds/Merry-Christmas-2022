import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

// Config slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload || initialState.username;
    },
  },
});

// Export actions
export const { updateUsername } = userSlice.actions;

// Select state username from slice
export const selectUsername = (state) => state.user.username;

// Export reducer
export default userSlice.reducer;
