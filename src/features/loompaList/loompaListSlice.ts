import { createSlice } from "@reduxjs/toolkit";
import { list as mock } from "../../mocks";
import { OompaLoompa } from "../../types";
import { RootState } from "../../store";

interface State {
    value: OompaLoompa[];
}

const initialState: State = {
    value: mock,
}

export const loompaListSlice = createSlice({
    name: "loompaList",
    initialState,
    reducers: {
        setList: (state: State = initialState) => state,
    },
});

export const { setList } = loompaListSlice.actions;
export const selectList = (state: RootState) => state.loompas;
export const loompaListReducer = loompaListSlice.reducer;
