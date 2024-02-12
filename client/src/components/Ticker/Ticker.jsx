import PropTypes from "prop-types";
import TickerRow from "../TickerRow/TickerRow";

import styles from "../../sass/layouts/ticker.module.scss";

const Ticker = ({
  data,
  trigger,
  handleTrackTicker,
  companies,
  titleItems,
  trackedTickers,
}) => {
  return (
    <section>
      {trigger === "main" ? (
        <h1 className={styles.title}>Stock Exchange</h1>
      ) : (
        <h2 className={styles.subject}>User Tracked Ticker</h2>
      )}

      <div className={styles.ticker__container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table__heading}>{titleItems}</tr>
          </thead>
          <tbody>
            {data.map((tickerData, index) => (
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
export default Ticker;

Ticker.propTypes = {
  data: PropTypes.array,
  trigger: PropTypes.string.isRequired,
  handleTrackTicker: PropTypes.func,
  companies: PropTypes.object.isRequired,
  titleItems: PropTypes.node.isRequired,
  trackedTickers: PropTypes.array.isRequired,
};
