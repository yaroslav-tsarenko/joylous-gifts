import PropTypes from "prop-types";
import "./CategoryIcons.css";

const CategoryIcons = ({ className = "" }) => {
  return (
    <div className={`category-icons1 ${className}`}>
      <div className="icon-grid">
        <div className="icon-labels">
          <input className="icon-names" type="checkbox" />
          <div className="all-products1">All Products</div>
        </div>
        <a
          className="spacer"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          604
        </a>
      </div>
      <div className="icon-grid1">
        <div className="vector-parent">
          <input className="vector" type="checkbox" />
          <div className="mobile-phone-credit">Mobile phone credit</div>
        </div>
        <a
          className="a"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          38
        </a>
      </div>
      <div className="icon-grid2">
        <div className="vector-group">
          <img className="vector-icon14" alt="" src="/vector-21.svg" />
          <a
            className="e-commerce"
            href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
            target="_blank"
          >
            E-Commerce
          </a>
        </div>
        <a
          className="a1"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          54
        </a>
      </div>
      <div className="icon-grid3">
        <div className="vector-container">
          <img className="vector-icon15" alt="" src="/vector-31.svg" />
          <div className="fashion-lifestyle">{`Fashion & Lifestyle`}</div>
        </div>
        <a
          className="a2"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          86
        </a>
      </div>
      <div className="icon-grid4">
        <div className="foods-and-restaurantssvg-parent">
          <img
            className="foods-and-restaurantssvg-icon"
            loading="lazy"
            alt=""
            src="/foodsandrestaurantssvg.svg"
          />
          <div className="foods-restaurants">{`Foods & Restaurants`}</div>
        </div>
        <a
          className="a3"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          172
        </a>
      </div>
      <div className="icon-grid5">
        <div className="electronicssvg-parent">
          <img
            className="electronicssvg-icon"
            alt=""
            src="/electronicssvg.svg"
          />
          <div className="electronics">Electronics</div>
        </div>
        <a
          className="a4"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          11
        </a>
      </div>
      <div className="icon-grid6">
        <div className="home-and-gardensvg-parent">
          <img
            className="home-and-gardensvg-icon"
            alt=""
            src="/homeandgardensvg.svg"
          />
          <div className="home-garden">{`Home & Garden`}</div>
        </div>
        <a
          className="a5"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          45
        </a>
      </div>
      <div className="icon-grid7">
        <div className="health-spa-beautysvg-parent">
          <img
            className="health-spa-beautysvg-icon"
            alt=""
            src="/healthspabeautysvg.svg"
          />
          <div className="health-spa">{`Health, Spa & Beauty`}</div>
        </div>
        <a
          className="a6"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          17
        </a>
      </div>
      <div className="icon-grid8">
        <div className="travelsvg-parent">
          <img className="travelsvg-icon" alt="" src="/travelsvg.svg" />
          <div className="travel-experiences">{`Travel & Experiences`}</div>
        </div>
        <a
          className="a7"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          66
        </a>
      </div>
      <div className="icon-grid9">
        <div className="charitysvg-parent">
          <img className="charitysvg-icon" alt="" src="/charitysvg.svg" />
          <div className="charity">Charity</div>
        </div>
        <a
          className="a8"
          href="https://www.figma.com/design/kVNkzYYrdSzsbBJ9sTmheI?node-id=2-1603"
          target="_blank"
        >
          20
        </a>
      </div>
    </div>
  );
};

CategoryIcons.propTypes = {
  className: PropTypes.string,
};

export default CategoryIcons;
