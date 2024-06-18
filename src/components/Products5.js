import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products5.css";

const Products5 = ({
  className = "",
  frame1000006654,
  propBackgroundImage,
}) => {
  const a53d96929411888382c10b17b61Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={`products8 ${className}`}>
      <div
        className="a53d9-6929-4118-8838-2c10b17b61"
        style={a53d96929411888382c10b17b61Style}
      >
        <img
          className="a53d9-6929-4118-8838-2c10b17b6-child"
          alt=""
          src={frame1000006654}
        />
      </div>
      <div className="featured-product-names">
        <div className="mall-of-the8">{`Mall of the Emirates & City Center`}</div>
        <div className="container-parent">
          <div className="container16">
            <div className="div">$ 200</div>
          </div>
          <div className="container17">
            <div className="in-store-only">IN-STORE only</div>
          </div>
        </div>
      </div>
      <div className="button20">
        <img className="tag-icon20" alt="" src="/tag-icon1.svg" />
        <div className="button21">Shop Now</div>
        <img className="tag-icon21" alt="" src="/tag-icon2.svg" />
      </div>
    </div>
  );
};

Products5.propTypes = {
  className: PropTypes.string,
  frame1000006654: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Products5;
