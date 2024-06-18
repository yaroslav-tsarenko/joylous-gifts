import PropTypes from "prop-types";
import "./Products7.css";

const Products7 = ({ className = "", a53d96929411888382c10b17b }) => {
  return (
    <div className={`products5 ${className}`}>
      <div className="product-image-list">
        <img
          className="a53d9-6929-4118-8838-2c10b17b6-icon5"
          alt=""
          src={a53d96929411888382c10b17b}
        />
        <div className="product-favourites">
          <img className="heart-icon5" alt="" src="/heart.svg" />
        </div>
      </div>
      <div className="product-name-list">
        <div className="mall-of-the5">{`Mall of the Emirates & City Center`}</div>
        <div className="product-availability-list">
          <div className="background10">
            <div className="container10">
              <div className="online5">Online</div>
            </div>
          </div>
          <div className="background11">
            <div className="container11">
              <div className="in-store5">In-Store</div>
            </div>
          </div>
        </div>
      </div>
      <button className="button14">
        <img className="tag-icon14" alt="" src="/tag-icon1.svg" />
        <div className="buy-button-list-container">
          <div className="button15">Shop Now</div>
        </div>
        <img className="tag-icon15" alt="" src="/tag-icon2.svg" />
      </button>
    </div>
  );
};

Products7.propTypes = {
  className: PropTypes.string,
  a53d96929411888382c10b17b: PropTypes.string,
};

export default Products7;
