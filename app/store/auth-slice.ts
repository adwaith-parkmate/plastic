import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  authState: any;
}

const initialState: IAuthState = {
  authState: { isLoggedIn: false, userData: null },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<{ isLoggedIn: boolean; userData?: {email: string} }>) => {
      console.log("hello from redux")
      state.authState = action.payload;
    },
    onLogout: (state, action: PayloadAction) => {
        state.authState = initialState;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;