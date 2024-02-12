import PropTypes from "prop-types";
import Ticker from "../Ticker/Ticker";
import Loading from "../Loading";
import { useTickerLogic } from "../hooks";
import styles from "../../sass/layouts/ticker.module.scss";

const Home = () => {
  const {
    actualTickers,
    companies,
    error,
    handleTrackTicker,
    loading,
    titleItems,
    trackedTickerData,
    trackedTickers,
  } = useTickerLogic() || {};

  return (
    <main>
      <section className={styles.section}>
        <div className={styles.container}>
          {loading && <Loading />}
          {error && (
            <p className={styles.error}>Sorry, something went wrong!😡</p>
          )}
          {!loading && !error && actualTickers && (
            <Ticker
              data={actualTickers}
              trigger={"main"}
              companies={companies}
              handleTrackTicker={handleTrackTicker}
              trackedTickers={trackedTickers}
              titleItems={titleItems}
            />
          )}
          {!loading && !error && trackedTickers.length === 0 ? (
            <p className={styles.subject}>No tracked tickers yet</p>
          ) : (
            <Ticker
              data={trackedTickerData}
              trigger={"user"}
              companies={companies}
              handleTrackTicker={handleTrackTicker}
              titleItems={titleItems}
              trackedTickers={trackedTickers}
            />
          )}
        </div>
      </section>
    </main>
  );
};
export default Home;
Home.propTypes = {
  actualTickers: PropTypes.array,
  companies: PropTypes.object,
  error: PropTypes.bool,
  handleTrackTicker: PropTypes.func,
  loading: PropTypes.bool,
  titleItems: PropTypes.node,
  trackedTickerData: PropTypes.array,
  trackedTickers: PropTypes.array,
};
