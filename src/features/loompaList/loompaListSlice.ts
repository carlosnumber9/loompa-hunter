import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoadingState, OompaLoompa } from "../../declarations";
import { RootState } from "../../store";

interface State {
  value: OompaLoompa[];
  status: LoadingState;
  lastRequest: number;
  nextPage: number;
}

const initialState: State = {
  value: [],
  status: LoadingState.LOADING,
  lastRequest: new Date("1970-03-02").getTime(),
  nextPage: 1,
};

export const fetchLoompasList = createAsyncThunk(
  "loompaList/fetchLoompaList",
  async (_, { getState }) => {
    const currentState: RootState = getState() as RootState;
    const currentPage: number = currentState.loompas.nextPage;
    const response = await fetch(
      `${import.meta.env.VITE_LOOMPA_LIST_URL}?page=${currentPage}`
    ).then((response) => response.json());
    return response.results as OompaLoompa[];
  }
);

export const loompaListSlice = createSlice({
  name: "loompaList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoompasList.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchLoompasList.fulfilled, (state, action) => ({
        value: [...state.value, ...action.payload],
        status: LoadingState.OK,
        lastRequest: new Date().getTime(),
        nextPage: state.nextPage + 1,
      }))
      .addCase(fetchLoompasList.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const selectList = (state: RootState) => state.loompas;
export const loompaListReducer = loompaListSlice.reducer;
