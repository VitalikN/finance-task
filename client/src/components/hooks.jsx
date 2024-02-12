import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { getTickers } from "../redux/ticker/actions";
import {
  getTickersError,
  getTickersRequested,
  selectTickers,
} from "../redux/ticker/reducer";
import { companies, tableTitles } from "./constants";

import styles from "../sass/layouts/ticker.module.scss";

export const useTickerLogic = () => {
  const dispatch = useDispatch();
  const { actualTickers, loading, error } = useSelector(selectTickers);
  const [trackedTickers, setTrackedTickers] = useState(
    JSON.parse(localStorage.getItem("trackedTickers")) || []
  );

  const handleTrackTicker = (ticker) => {
    if (!trackedTickers.includes(ticker)) {
      setTrackedTickers((prevTickers) => [...prevTickers, ticker]);
    } else {
      setTrackedTickers(trackedTickers.filter((item) => item !== ticker));
    }
  };

  const trackedTickerData = actualTickers.filter((tickerData) =>
    trackedTickers.includes(tickerData.ticker)
  );

  useEffect(() => {
    localStorage.setItem("trackedTickers", JSON.stringify(trackedTickers));
  }, [trackedTickers]);

  useEffect(() => {
    dispatch(getTickersRequested());
    const socket = io("http://localhost:4000");
    socket.emit("start");

    const handleTickerUpdate = (quotes) => dispatch(getTickers(quotes));
    const handleConnectionError = () => dispatch(getTickersError());

    socket.on("ticker", handleTickerUpdate);
    socket.on("connect_error", handleConnectionError);

    return () => {
      socket.off("ticker", handleTickerUpdate);
      socket.off("connect_error", handleConnectionError);
    };
  }, [dispatch]);
  const titleItems = tableTitles.map((title) => <th key={title}>{title}</th>);

  return {
    actualTickers,
    loading,
    error,
    trackedTickers,
    handleTrackTicker,
    trackedTickerData,
    tableTitles,
    companies,
    titleItems,
  };
};

export const useTickerRow = (data, companies, tracked) => {
  const {
    ticker,
    price,
    change,
    change_percent,
    dividend,
    yield: income,
    last_trade_time,
  } = data;
  const [prevChangePercent, setPrevChangePercent] = useState(change_percent);
  const [changeClass, setChangeClass] = useState(styles.positive);
  const [arrowSymbol, setArrowSymbol] = useState(
    <FaArrowUp className={styles.icon} />
  );

  const time = new Date(last_trade_time);
  useEffect(() => {
    if (change_percent > prevChangePercent) {
      setChangeClass(styles.positive);
      setArrowSymbol(<FaArrowUp className={styles.icon} />);
    } else if (change_percent < prevChangePercent) {
      setChangeClass(styles.negative);
      setArrowSymbol(<FaArrowDown className={styles.icon} />);
    }

    setPrevChangePercent(change_percent);
  }, [change_percent, prevChangePercent]);

  return {
    companies,
    ticker,
    price,
    change,
    change_percent,
    dividend,
    income,
    time,
    changeClass,
    arrowSymbol,
    tracked,
  };
};
