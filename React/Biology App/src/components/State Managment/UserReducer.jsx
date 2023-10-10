import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: "",
    password: "",
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
