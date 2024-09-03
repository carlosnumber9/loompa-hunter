import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, OompaLoompa } from "../../declarations";
import { RootState } from "../../store";

interface State {
  details: { [key: string]: OompaLoompa };
  status: LoadingState;
}

const initialState: State = {
  details: {},
  status: LoadingState.LOADING,
};

export const fetchLoompaDetails = createAsyncThunk(
  "loompaDetails/fetch",
  async (loompaId: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_LOOMPA_LIST_URL}/${loompaId}`
    ).then((response) => response.json());
    return { ...response, id: loompaId } as OompaLoompa;
  }
);

export const loompaDetailsSlice = createSlice({
  name: "loompaDetails",
  initialState,
  reducers: {
    setDetails: (
      state: State = initialState,
      action: PayloadAction<OompaLoompa>
    ) => ({
      ...state,
      details: { ...state.details, [action.payload.id]: action.payload },
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoompaDetails.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(fetchLoompaDetails.fulfilled, (state, action) => {
        state.details[action.payload.id] = action.payload;
        state.status = LoadingState.OK;
      })
      .addCase(fetchLoompaDetails.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setDetails } = loompaDetailsSlice.actions;
export const selectDetails = (state: RootState, id: string) =>
  state.details.details[id];
export const loompaDetailsReducer = loompaDetailsSlice.reducer;
