import { configureStore } from '@reduxjs/toolkit'
import { loompaListSlice as listReducer } from './features/loompaList'

export const store = configureStore({
  reducer: {
    loompas: () => listReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch