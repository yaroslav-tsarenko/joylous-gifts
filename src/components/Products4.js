import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products4.css";

const Products4 = ({
  className = "",
  a53d96929411888382c10b17b,
  propTop,
  propLeft,
}) => {
  const productsStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`products10 ${className}`} style={productsStyle}>
      <img
        className="a53d9-6929-4118-8838-2c10b17b6-icon7"
        alt=""
        src={a53d96929411888382c10b17b}
      />
      <div className="product-cards">
        <div className="mall-of-the10">{`Mall of the Emirates & City Center`}</div>
        <div className="product-availability1">
          <div className="background16">
            <div className="container20">
              <div className="online8">Online</div>
            </div>
          </div>
          <div className="background17">
            <div className="container21">
              <div className="in-store8">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button26">
        <img className="tag-icon26" alt="" src="/tag-icon.svg" />
        <div className="product-buttons">
          <div className="button27">Shop Now</div>
        </div>
        <img className="tag-icon27" alt="" src="/tag-icon-20.svg" />
      </button>
      <div className="heart-wrapper3">
        <img className="heart-icon8" alt="" src="/heart.svg" />
      </div>
    </div>
  );
};

Products4.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Products4;
