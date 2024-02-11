import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from "./ticker/reducer";

const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

export default store;
