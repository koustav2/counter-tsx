import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state): void => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  reset,
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;
