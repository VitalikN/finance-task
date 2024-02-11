import TrackedTicker from "../TrackedTicker/TrackedTicker";
import Ticker from "../Ticker/Ticker";
import Loading from "../Loading";
import { useTickerLogic } from "../hooks";
import styles from "../../sass/layouts/ticker.module.scss";

const Home = () => {
  const {
    actualTickers,
    loading,
    error,
    trackedTickers,
    handleTrackTicker,
    trackedTickerData,
    titleItems,
    companies,
  } = useTickerLogic() || {};

  return (
    <main>
      <section className={styles.section}>
        <div className={`${styles.container} `}>
          {loading && <Loading />}
          {error && (
            <p className={styles.error}>Sorry, something went wrong!😡</p>
          )}
          {!loading && !error && actualTickers && (
            <Ticker
              actualTickers={actualTickers}
              companies={companies}
              handleTrackTicker={handleTrackTicker}
              trackedTickers={trackedTickers}
              titleItems={titleItems}
            />
          )}
          {!loading && !error && trackedTickers.length === 0 ? (
            <p className={styles.subject}>No tracked tickers yet</p>
          ) : (
            <TrackedTicker
              trackedTickerData={trackedTickerData}
              titleItems={titleItems}
              companies={companies}
              handleTrackTicker={handleTrackTicker}
              trackedTickers={trackedTickers}
            />
          )}
        </div>
      </section>
    </main>
  );
};
export default Home;
