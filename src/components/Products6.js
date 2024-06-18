import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products6.css";

const Products6 = ({ className = "", propBackgroundImage }) => {
  const a53d96929411888382c10b17b6Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`products7 ${className}`}>
      <div
        className="a53d9-6929-4118-8838-2c10b17b6"
        style={a53d96929411888382c10b17b6Style}
      >
        <img
          className="trio-image-container"
          loading="lazy"
          alt=""
          src="/frame-1000006654@2x.png"
        />
      </div>
      <div className="product-trio-names">
        <div className="mall-of-the7">{`Mall of the Emirates & City Center`}</div>
        <div className="trio-availability">
          <div className="background14">
            <div className="container14">
              <div className="online7">Online</div>
            </div>
          </div>
          <div className="background15">
            <div className="container15">
              <div className="in-store7">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <div className="trio-buttons">
        <button className="button18">
          <img className="tag-icon18" alt="" src="/tag-icon5.svg" />
          <div className="trio-buy-button-container">
            <div className="button19">Shop Now</div>
          </div>
          <img className="tag-icon19" alt="" src="/tag-icon-12.svg" />
        </button>
      </div>
      <div className="heart-wrapper2">
        <img className="heart-icon7" alt="" src="/heart-12.svg" />
      </div>
    </div>
  );
};

Products6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Products6;
