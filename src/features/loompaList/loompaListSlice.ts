import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingState, OompaLoompa } from "../../declarations";
import { RootState } from "../../store";

interface State {
  value: OompaLoompa[];
  status: LoadingState;
  lastRequest: number;
}

const initialState: State = {
  value: [],
  status: LoadingState.LOADING,
  lastRequest: new Date('1970-03-02').getTime(),
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
        state.lastRequest = new Date().getTime();
      })
      .addCase(fetchLoompasList.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setList } = loompaListSlice.actions;
export const selectList = (state: RootState) => state.loompas;
export const loompaListReducer = loompaListSlice.reducer;
