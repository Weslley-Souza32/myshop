import { createSlice } from "@reduxjs/toolkit";
interface IUser {
  name: string;
  email: string;
}
interface IUserState {
  user: IUser | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: IUserState = {
  user: null,
};
export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
