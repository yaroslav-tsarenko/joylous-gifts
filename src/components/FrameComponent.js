import Products from "./Products";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`recommendations-header-parent ${className}`}>
      <div className="recommendations-header">
        <h1 className="you-may-also">You May Also Like</h1>
        <button className="button41">
          <img className="tag-icon38" alt="" src="/tag-icon.svg" />
          <div className="button-wrapper5">
            <div className="button42">See All</div>
          </div>
          <img className="tag-icon39" alt="" src="/tag-icon.svg" />
        </button>
      </div>
      <div className="product-carousel1">
        <div className="carousel-items">
          <img
            className="arrow-left-icon5"
            loading="lazy"
            alt=""
            src="/arrowleft-2.svg"
          />
        </div>
        <Products a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png@2x.png" />
        <Products
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-1@2x.png"
          propBorder="unset"
          propBackgroundColor="unset"
          propOutline="unset"
        />
        <Products
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-2@2x.png"
          propBorder="unset"
          propBackgroundColor="unset"
          propOutline="unset"
        />
        <Products
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-3@2x.png"
          propBorder="unset"
          propBackgroundColor="unset"
          propOutline="unset"
        />
        <Products
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-4@2x.png"
          propBorder="none"
          propBackgroundColor="transparent"
          propOutline="none"
        />
        <div className="carousel-items1">
          <img
            className="arrow-right-icon3"
            loading="lazy"
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
