import { combineReducers } from "redux";
import { cartReducer } from "./Cart/Cart-Reducer";
import { userSlice } from "./User/User-Slice";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
