import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products3.css";

const Products3 = ({
  className = "",
  a53d96929411888382c10b17b,
  propLeft,
  propTop,
}) => {
  const products1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`products11 ${className}`} style={products1Style}>
      <div className="wrapper-789a53d9-6929-4118-883">
        <img
          className="a53d9-6929-4118-8838-2c10b17b6-icon8"
          alt=""
          src={a53d96929411888382c10b17b}
        />
      </div>
      <div className="mall-of-the-emirates-city-ce-parent4">
        <div className="mall-of-the11">{`Mall of the Emirates & City Center`}</div>
        <div className="background-parent2">
          <div className="background18">
            <div className="container22">
              <div className="online9">Online</div>
            </div>
          </div>
          <div className="background19">
            <div className="container23">
              <div className="in-store9">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button28">
        <img className="tag-icon28" alt="" src="/tag-icon.svg" />
        <div className="button-wrapper2">
          <div className="button29">Shop Now</div>
        </div>
        <img className="tag-icon29" alt="" src="/tag-icon-20.svg" />
      </button>
      <div className="heart-wrapper4">
        <img className="heart-icon9" alt="" src="/heart.svg" />
      </div>
    </div>
  );
};

Products3.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Products3;
