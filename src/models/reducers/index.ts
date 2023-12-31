import { combineReducers } from "@reduxjs/toolkit";

const requireReducer = require.context(".", true, /\.ts$/);

const reducers = requireReducer.keys().reduce((acc: any, filename: string) => {
  if (filename !== "./index.ts") {
    const reducer = requireReducer(filename).default;
    const reducerName = filename.replace(/\.\/(.*)\.ts/, "$1");
    acc[reducerName] = reducer;
  }
  return acc;
}, {});

const rootReducers = combineReducers(reducers);

export default rootReducers;
