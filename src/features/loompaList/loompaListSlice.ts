import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { list as mock } from "../../mocks";
import { OompaLoompa } from "../../types";
import { RootState } from "../../store";

const initialState: OompaLoompa[] = mock;

export const loompaListSlice = createSlice({
    name: 'loompaList',
    initialState,
    reducers: {
        update: (state) => state,
        filter: (state, action: PayloadAction<string>) => {
            state.filter((loompa: OompaLoompa) => loompa.first_name.includes(action.payload))
        }
    }
});

export const selectList = (state: RootState) => state.loompas;
export default loompaListSlice.reducer;