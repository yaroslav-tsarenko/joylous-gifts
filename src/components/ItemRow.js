import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
  propLineHeight,
}) => {
  const fentyBeauty50Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={`item-row ${className}`}>
      <div className="item-details">
        <img
          className="item-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="item-title">
          <b className="fenty-beauty-501" style={fentyBeauty50Style}>
            {fentyBeauty50OFFGiftCard}
          </b>
          <b className="discount-20-off1">{discount20OFF}</b>
        </div>
        <div className="item-actions">
          <div className="quantity">
            <b className="quantity-placeholder">$120.00</b>
            <b className="credits1">12 Credits</b>
          </div>
          <div className="increase-quantity">
            <div className="plus-button">
              <div className="plus-icon">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="increase-placeholder">3</b>
              <input className="decrease-quantity" type="checkbox" />
            </div>
            <div className="time-period">
              <b className="hourly">Hourly</b>
              <div className="hourly-container">
                <img
                  className="hourly-placeholder-icon"
                  alt=""
                  src="/hourly-placeholder.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <b className="item-separator">$120.00</b>
      </div>
      <div className="row-separator" />
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
};

export default ItemRow;
