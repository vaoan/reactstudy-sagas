import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
