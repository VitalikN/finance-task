import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useTickerRow } from "../hooks";
import styles from "../../sass/layouts/ticker.module.scss";

const TickerRow = ({ data, companies, onTrackTicker, tracked }) => {
  const {
    ticker,
    price,
    change,
    change_percent,
    dividend,
    income,
    time,
    changeClass,
    arrowSymbol,
  } = useTickerRow(data, companies, onTrackTicker, tracked);

  return (
    <tr>
      <td>{companies[ticker]}</td>
      <td>{ticker}</td>
      <td>{price}$</td>
      <td>{change || ""}</td>

      <td className={changeClass}>
        {arrowSymbol} {change_percent} %
      </td>
      <td>{dividend}</td>
      <td>{income}</td>
      <td>
        {time.toLocaleTimeString()} {time.toLocaleDateString()}
      </td>
      <td onClick={() => onTrackTicker(ticker)}>
        {tracked ? (
          <FaMinus className={styles.icon__minus} />
        ) : (
          <FaPlus className={styles.icon__plus} />
        )}
      </td>
    </tr>
  );
};

export default TickerRow;

TickerRow.propTypes = {
  data: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    change: PropTypes.string,
    change_percent: PropTypes.string,
    dividend: PropTypes.string,
    yield: PropTypes.string,
    last_trade_time: PropTypes.string,
  }).isRequired,
  companies: PropTypes.object.isRequired,
  onTrackTicker: PropTypes.func.isRequired,
  tracked: PropTypes.bool.isRequired,
};
