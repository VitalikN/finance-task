import { getTickersActual, getTickersPrevious } from "./reducer";

export const getTickers = (tickers) => (dispatch, getState) => {
  dispatch(
    getTickersPrevious(
      getState().tickers.actualTickers.map((ticker) => ({
        ticker: ticker.ticker,
        change_percent: ticker.change_percent,
      }))
    )
  );
  dispatch(getTickersActual(tickers));
};
