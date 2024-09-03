import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingState, OompaLoompa } from "../../declarations";
import { RootState } from "../../store";

interface State {
  value: OompaLoompa[];
  status: LoadingState;
}

const initialState: State = {
  value: [],
  status: LoadingState.LOADING,
};

export const fetchLoompasList = createAsyncThunk(
  "loompaList/fetchLoompaList",
  async () => {
    const response = await fetch(import.meta.env.VITE_LOOMPA_LIST_URL).then(
      (response) => response.json()
    );
    return response.results as OompaLoompa[];
  }
);

export const loompaListSlice = createSlice({
  name: "loompaList",
  initialState,
  reducers: {
    setList: (state: State = initialState) => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoompasList.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchLoompasList.fulfilled, (state, action) => {
        state.value = [...state.value, ...action.payload];
        state.status = LoadingState.OK;
      })
      .addCase(fetchLoompasList.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setList } = loompaListSlice.actions;
export const selectList = (state: RootState) => state.loompas;
export const loompaListReducer = loompaListSlice.reducer;
