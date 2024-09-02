import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface State {
    value: string;
}

const initialState: State = {
    value: ''
}

export const searchTextSlice = createSlice({
    name: "searchText",
    initialState,
    reducers: {
        setText: (state: State, action: PayloadAction<string>) => ({
            ...state,
            value: action.payload
        }),
    },
});

export const { setText } = searchTextSlice.actions;
export const selectSearchText = (state: RootState) => state.searchText;
export const searchTextReducer = searchTextSlice.reducer;
