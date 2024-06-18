import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`homepage-inner ${className}`}>
      <div className="pngwing-1-parent">
        <img
          className="pngwing-1-icon"
          loading="lazy"
          alt=""
          src="/pngwing-1@2x.png"
        />
        <div className="give-joy-content-wrapper">
          <div className="give-joy-content">
            <div className="discover-the-joy-of-giving-parent">
              <h1 className="discover-the-joy">Discover the Joy of Giving!</h1>
              <div className="with-our-wide-range-of-gift-ca-wrapper">
                <div className="with-our-wide">
                  With our wide range of gift cards, you can find the perfect
                  present for any occasion. Whether it’s for birthdays,
                  holidays, or just because, we have you covered.
                </div>
              </div>
            </div>
            <button className="button12">
              <img className="tag-icon12" alt="" src="/tag-icon3.svg" />
              <div className="button13">Explore</div>
              <img className="tag-icon13" alt="" src="/tag-icon3.svg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
