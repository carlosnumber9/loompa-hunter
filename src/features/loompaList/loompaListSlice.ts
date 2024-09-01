import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { list as mock } from "../../mocks";
import { OompaLoompa } from "../../types";
import { RootState } from "../../store";

interface State {
    loompas: OompaLoompa[];
    searchText: string;
}

const initialState: State = {
    loompas: mock,
    searchText: ''
}

export const loompaListSlice = createSlice({
    name: "loompaList",
    initialState,
    reducers: {
        update: (state: State = initialState) => state,
        setSearchText: (state: State, action: PayloadAction<string>) => ({
            ...state,
            searchText: action.payload
        }),
    },
});

export const { update, setSearchText } = loompaListSlice.actions;
export const selectList = (state: RootState) => state.loompas;
export const loompaListReducer = loompaListSlice.reducer;
