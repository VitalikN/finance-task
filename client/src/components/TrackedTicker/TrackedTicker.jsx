import PropTypes from "prop-types";

import TickerRow from "../TickerRow/TickerRow";

import styles from "../../sass/layouts/ticker.module.scss";

const TrackedTicker = ({
  trackedTickerData,
  titleItems,
  trackedTickers,
  handleTrackTicker,
  companies,
}) => {
  return (
    <section>
      <h2 className={styles.subject}>User Tracked Ticker</h2>
      <div className={styles.ticker__container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table__heading}>{titleItems}</tr>
          </thead>
          <tbody>
            {trackedTickerData.map((tickerData, index) => (
              <TickerRow
                key={index}
                data={tickerData}
                companies={companies}
                onTrackTicker={handleTrackTicker}
                tracked={trackedTickers.includes(tickerData.ticker)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default TrackedTicker;

TrackedTicker.propTypes = {
  trackedTickerData: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      change: PropTypes.string.isRequired,
      change_percent: PropTypes.string.isRequired,
      dividend: PropTypes.string.isRequired,
      yield: PropTypes.string.isRequired,
      last_trade_time: PropTypes.string.isRequired,
    })
  ).isRequired,
  titleItems: PropTypes.arrayOf(PropTypes.node).isRequired,
  trackedTickers: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleTrackTicker: PropTypes.func.isRequired,
  companies: PropTypes.object.isRequired,
};
