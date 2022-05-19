import { configureStore } from "@reduxjs/toolkit";
import { betsReducer, gamesReducer, gameSlice } from "../slices";

const store = configureStore({
  reducer: {
    bets: betsReducer,
    games: gamesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
