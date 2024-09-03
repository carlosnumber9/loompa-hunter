import { configureStore } from "@reduxjs/toolkit";
import { loompaListReducer } from "./features/loompaList";
import { searchTextReducer } from "./features/searchText/searchTextSlice";
import { loompaDetailsReducer } from "./features/loompaDetails";

export const store = configureStore({
  reducer: {
    loompas: loompaListReducer,
    searchText: searchTextReducer,
    details: loompaDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
