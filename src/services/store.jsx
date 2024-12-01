// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./SliceApi";

const store = configureStore({
  reducer: {
    // Добавляем редюсер для API
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Добавляем middleware RTK Query
});

export default store;
