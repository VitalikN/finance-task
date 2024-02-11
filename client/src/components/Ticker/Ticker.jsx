import PropTypes from "prop-types";
import TickerRow from "../TickerRow/TickerRow";

import styles from "../../sass/layouts/ticker.module.scss";

const Ticker = ({
  actualTickers,
  handleTrackTicker,
  companies,
  titleItems,
  trackedTickers,
}) => {
  return (
    <section>
      <h1 className={styles.title}>Stock Exchange</h1>
      <div className={styles.ticker__container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table__heading}>{titleItems}</tr>
          </thead>
          <tbody>
            {actualTickers.map((tickerData, index) => (
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
  actualTickers: PropTypes.array.isRequired,
  handleTrackTicker: PropTypes.func.isRequired,
  companies: PropTypes.object.isRequired,
  titleItems: PropTypes.node.isRequired,
  trackedTickers: PropTypes.array.isRequired,
};
