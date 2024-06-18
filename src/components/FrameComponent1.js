import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent4 ${className}`}>
      <div className="card-184png-wrapper">
        <img
          className="card-184png-icon"
          loading="lazy"
          alt=""
          src="/card184png@2x.png"
        />
      </div>
      <div className="frame-parent5">
        <div className="button-parent">
          <button className="button35">
            <i className="gift-a-friend">Gift a Friend</i>
          </button>
          <div className="button36">
            <i className="buy-for-self">Buy for Self</i>
          </div>
        </div>
        <i className="i">£20.00</i>
        <div className="label-choose-amount-parent">
          <div className="label-choose">Choose Amount</div>
          <div className="options">
            <div className="select">Select:</div>
            <div className="select-dropdown">
              <img className="selectphp-icon" alt="" src="/selectphp.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="backgroundborder-wrapper">
            <div className="backgroundborder">
              <div className="border-elements">
                <b className="b3">–</b>
              </div>
              <div className="input-qty">
                <div className="container32">
                  <div className="placeholder">1</div>
                </div>
              </div>
              <div className="border-elements1">
                <b className="b4">+</b>
              </div>
            </div>
          </div>
          <button className="button37">
            <img className="tag-icon34" alt="" src="/tag-icon3.svg" />
            <div className="button-wrapper3">
              <div className="button38">Buy</div>
            </div>
            <img className="tag-icon35" alt="" src="/tag-icon3.svg" />
          </button>
        </div>
        <h3 className="description">Description</h3>
        <div className="give-the-gift-of-endless-possi-wrapper">
          <div className="give-the-gift">{`Give the gift of endless possibilities with an Amazon Gift Card. Whether it’s books, electronics, clothing, or home essentials, Amazon has something for everyone. Redeemable for millions of items, an Amazon Gift Card is the perfect choice for any occasion.  `}</div>
        </div>
        <h3 className="details1">Details</h3>
        <div className="available-in-various-container">
          <p className="available-in-various">
            Available in various denominations
          </p>
          <p className="redeemable-on-amazoncom">Redeemable on Amazon.com</p>
          <p className="no-expiration-date">No expiration date or fees</p>
          <p className="digital-delivery-via">
            Digital delivery via email or printable option available
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
