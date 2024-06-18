import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products.css";

const Products = ({
  className = "",
  a53d96929411888382c10b17b,
  propBorder,
  propBackgroundColor,
  propOutline,
}) => {
  const a53d96929411888382c10b17b6IconStyle = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
      outline: propOutline,
    };
  }, [propBorder, propBackgroundColor, propOutline]);

  return (
    <div className={`products12 ${className}`}>
      <img
        className="a53d9-6929-4118-8838-2c10b17b6-icon9"
        loading="lazy"
        alt=""
        src={a53d96929411888382c10b17b}
        style={a53d96929411888382c10b17b6IconStyle}
      />
      <div className="product-cards1">
        <div className="mall-of-the12">{`Mall of the Emirates & City Center`}</div>
        <div className="availability">
          <div className="background22">
            <div className="container33">
              <div className="online10">Online</div>
            </div>
          </div>
          <div className="background23">
            <div className="container34">
              <div className="in-store10">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button39">
        <img className="tag-icon36" alt="" src="/tag-icon1.svg" />
        <div className="button-wrapper4">
          <div className="button40">Shop Now</div>
        </div>
        <img className="tag-icon37" alt="" src="/tag-icon2.svg" />
      </button>
      <div className="heart-wrapper5">
        <img className="heart-icon10" alt="" src="/heart.svg" />
      </div>
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propOutline: PropTypes.any,
};

export default Products;
