import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LoadingState,
  LoompaDetail,
  LoompaDetails,
  OompaLoompaDetail,
} from "../../declarations";
import { RootState } from "../../store";
import { lastRequestExpired } from "../../utils";

interface State {
  details: LoompaDetails;
  status: LoadingState;
}

const initialState: State = {
  details: {},
  status: LoadingState.LOADING,
};

export const getLoompaDetails = createAsyncThunk(
  "loompaDetails/fetch",
  async (loompaId: string, { getState }): Promise<OompaLoompaDetail> => {
    const currentState: RootState = getState() as RootState;
    const currentLoompaDetails: LoompaDetail =
      currentState.details.details[loompaId];
    if (
      !currentLoompaDetails ||
      lastRequestExpired(currentLoompaDetails.lastRequestTime)
    ) {
      const response = await fetch(
        `${import.meta.env.VITE_LOOMPA_LIST_URL}/${loompaId}`
      ).then((response) => response.json());
      return { ...response, id: loompaId } as OompaLoompaDetail;
    } else {
      return currentLoompaDetails.data;
    }
  }
);

export const loompaDetailsSlice = createSlice({
  name: "loompaDetails",
  initialState,
  reducers: {
    setDetails: (
      state: State = initialState,
      action: PayloadAction<OompaLoompaDetail>
    ) => ({
      ...state,
      details: {
        ...state.details,
        [action.payload.id]: {
          data: action.payload,
          lastRequestTime: new Date().getTime(),
        },
      },
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLoompaDetails.pending, (state) => {
        state.status = LoadingState.LOADING;
      })
      .addCase(getLoompaDetails.fulfilled, (state, action) => {
        state.details[action.payload.id] = {
          data: action.payload,
          lastRequestTime: new Date().getTime(),
        };
        state.status = LoadingState.OK;
      })
      .addCase(getLoompaDetails.rejected, (state) => {
        state.status = LoadingState.ERROR;
      });
  },
});

export const { setDetails } = loompaDetailsSlice.actions;
export const selectDetails = (state: RootState, id: string) =>
  state.details.details[id];
export const loompaDetailsReducer = loompaDetailsSlice.reducer;
