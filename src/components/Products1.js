import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Products1.css";

const Products1 = ({
  className = "",
  a53d96929411888382c10b17b,
  propLeft,
  propTop,
  propFlex,
  propMaxHeight,
  propBorder,
  propBackgroundColor,
  propOutline,
  propHeight,
  propFlex1,
  propBorder1,
  propBackgroundColor1,
  propOutline1,
}) => {
  const products3Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const wrapper789a53d969294118883Style = useMemo(() => {
    return {
      flex: propFlex,
      maxHeight: propMaxHeight,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      outline: propOutline,
      height: propHeight,
    };
  }, [
    propFlex,
    propMaxHeight,
    propBorder,
    propBackgroundColor,
    propOutline,
    propHeight,
  ]);

  const a53d96929411888382c10b17b6Icon1Style = useMemo(() => {
    return {
      flex: propFlex1,
      border: propBorder1,
      backgroundColor: propBackgroundColor1,
      outline: propOutline1,
    };
  }, [propFlex1, propBorder1, propBackgroundColor1, propOutline1]);

  return (
    <div className={`products14 ${className}`} style={products3Style}>
      <div
        className="wrapper-789a53d9-6929-4118-8831"
        style={wrapper789a53d969294118883Style}
      >
        <img
          className="a53d9-6929-4118-8838-2c10b17b6-icon11"
          alt=""
          src={a53d96929411888382c10b17b}
          style={a53d96929411888382c10b17b6Icon1Style}
        />
      </div>
      <div className="mall-of-the-emirates-city-ce-parent5">
        <div className="mall-of-the14">{`Mall of the Emirates & City Center`}</div>
        <div className="background-parent3">
          <div className="background26">
            <div className="container37">
              <div className="online12">Online</div>
            </div>
          </div>
          <div className="background27">
            <div className="container38">
              <div className="in-store12">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button45">
        <img className="tag-icon42" alt="" src="/tag-icon1.svg" />
        <div className="button-wrapper6">
          <div className="button46">Shop Now</div>
        </div>
        <img className="tag-icon43" alt="" src="/tag-icon2.svg" />
      </button>
      <div className="heart-wrapper7">
        <img className="heart-icon12" alt="" src="/heart.svg" />
      </div>
    </div>
  );
};

Products1.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propFlex: PropTypes.any,
  propMaxHeight: PropTypes.any,
  propBorder: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propOutline: PropTypes.any,
  propHeight: PropTypes.any,
  propFlex1: PropTypes.any,
  propBorder1: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propOutline1: PropTypes.any,
};

export default Products1;
