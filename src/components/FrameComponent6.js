import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`category-navigation-wrapper ${className}`}>
      <div className="category-navigation">
        <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
        <div className="category-icons">
          <div className="category">
            <img
              className="icons8-beach-umbrella-100-1"
              alt=""
              src="/icons8beachumbrella100-1@2x.png"
            />
            <h3 className="travel">Travel</h3>
          </div>
          <div className="category1">
            <img
              className="icons8-beach-umbrella-100-11"
              alt=""
              src="/icons8beachumbrella100-1-1@2x.png"
            />
            <h3 className="travel1">Fashion</h3>
          </div>
          <div className="category2">
            <img
              className="icons8-beach-umbrella-100-12"
              alt=""
              src="/icons8beachumbrella100-1-2@2x.png"
            />
            <h3 className="travel2">Shopping Mall</h3>
          </div>
          <div className="category3">
            <img
              className="icons8-beach-umbrella-100-13"
              alt=""
              src="/icons8beachumbrella100-1-3@2x.png"
            />
            <h3 className="travel3">Gadgets</h3>
          </div>
          <div className="category4">
            <img
              className="icons8-beach-umbrella-100-14"
              alt=""
              src="/icons8beachumbrella100-1-4@2x.png"
            />
            <h3 className="travel4">Gaming</h3>
          </div>
          <div className="category5">
            <img
              className="icons8-beach-umbrella-100-15"
              alt=""
              src="/icons8beachumbrella100-1-5@2x.png"
            />
            <h3 className="travel5">{`Home & Garden`}</h3>
          </div>
          <div className="category6">
            <img
              className="icons8-beach-umbrella-100-16"
              alt=""
              src="/icons8beachumbrella100-1-6@2x.png"
            />
            <h3 className="travel6">Birthday</h3>
          </div>
          <div className="category7">
            <img
              className="icons8-beach-umbrella-100-17"
              alt=""
              src="/icons8beachumbrella100-1-7@2x.png"
            />
            <h3 className="travel7">Jewellery</h3>
          </div>
        </div>
        <img className="arrow-left-icon1" alt="" src="/arrowleft-1.svg" />
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
