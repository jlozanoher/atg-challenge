import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BetModel } from "../../models";
import { BetService } from "../../services";
import { CommonState } from "../CoreTypes";

interface ModelState extends CommonState {
  bets: BetModel[];
}

const initialState: ModelState = {
  bets: [],
  status: "idle",
};

export const fetchBets = createAsyncThunk(
  "bets/fetchBets",
  async (betType: string) => {
    if (!betType) return [];
    const response = await BetService.getAll(betType);
    return response.data;
  }
);

export const betsSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBets.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bets = action.payload;
        console.log(action.payload);
        state.bets = action.payload.results;
      })
      .addCase(fetchBets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default betsSlice.reducer;
