import { configureStore } from '@reduxjs/toolkit'
import { loompaListReducer } from './features/loompaList'

export const store = configureStore({
  reducer: {
    loompas: loompaListReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch