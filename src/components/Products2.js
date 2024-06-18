import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products2.css";

const Products2 = ({
  className = "",
  a53d96929411888382c10b17b,
  propTop,
  propLeft,
}) => {
  const products2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`products13 ${className}`} style={products2Style}>
      <img
        className="a53d9-6929-4118-8838-2c10b17b6-icon10"
        loading="lazy"
        alt=""
        src={a53d96929411888382c10b17b}
      />
      <div className="product-details">
        <div className="mall-of-the13">{`Mall of the Emirates & City Center`}</div>
        <div className="product-status">
          <div className="background24">
            <div className="container35">
              <div className="online11">Online</div>
            </div>
          </div>
          <div className="background25">
            <div className="container36">
              <div className="in-store11">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button43">
        <img className="tag-icon40" alt="" src="/tag-icon1.svg" />
        <div className="button-containers">
          <div className="button44">Shop Now</div>
        </div>
        <img className="tag-icon41" alt="" src="/tag-icon2.svg" />
      </button>
      <div className="heart-wrapper6">
        <img className="heart-icon11" alt="" src="/heart.svg" />
      </div>
    </div>
  );
};

Products2.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Products2;
