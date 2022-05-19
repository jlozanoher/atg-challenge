import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GameModel } from "../../models";
import { GameService } from "../../services";
import { CommonState } from "../CoreTypes";

interface ModelState extends CommonState {
  game?: GameModel;
}

const initialState: ModelState = {
  status: "idle",
};

export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (id?: string) => {
    if (!id) return [];
    const response = await GameService.get(id);
    return response.data;
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGame.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.game = action.payload;
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default gameSlice.reducer;
