import Products5 from "./Products5";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`featured-container-wrapper ${className}`}>
      <div className="featured-container">
        <div className="featured-cards-title">
          <h1 className="featured-gift-cards">Featured Gift Cards</h1>
          <button className="button22">
            <img className="tag-icon22" alt="" src="/tag-icon.svg" />
            <div className="button23">See All</div>
            <img className="tag-icon23" alt="" src="/tag-icon.svg" />
          </button>
        </div>
        <div className="featured-products-slider">
          <img className="arrow-left-icon4" alt="" src="/arrowleft-2.svg" />
          <Products5 frame1000006654="/frame-1000006654@2x.png" />
          <Products5
            frame1000006654="/frame-1000006654@2x.png"
            propBackgroundImage="url('/789a53d96929411888382c10b17b6ce5png5@3x.png')"
          />
          <Products5
            frame1000006654="/frame-1000006654@2x.png"
            propBackgroundImage="url('/789a53d96929411888382c10b17b6ce5png6@3x.png')"
          />
          <Products5
            frame1000006654="/frame-1000006654@2x.png"
            propBackgroundImage="url('/789a53d96929411888382c10b17b6ce5png7@3x.png')"
          />
          <div className="products9">
            <textarea
              className="a53d9-6929-4118-8838-2c10b17b62"
              rows={9}
              cols={12}
            />
            <div className="mall-of-the-emirates-city-ce-parent3">
              <div className="mall-of-the9">{`Mall of the Emirates & City Center`}</div>
              <div className="container-group">
                <div className="container18">
                  <div className="div1">$ 200</div>
                </div>
                <div className="container19">
                  <div className="in-store-only1">IN-STORE only</div>
                </div>
              </div>
            </div>
            <div className="button24">
              <img className="tag-icon24" alt="" src="/tag-icon1.svg" />
              <div className="button25">Shop Now</div>
              <img className="tag-icon25" alt="" src="/tag-icon2.svg" />
            </div>
          </div>
          <img className="arrow-right-icon2" alt="" src="/arrowright.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
