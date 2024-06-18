import Products7 from "./Products7";
import PropTypes from "prop-types";
import "./ProductCarousel.css";

const ProductCarousel = ({ className = "" }) => {
  return (
    <section className={`product-carousel ${className}`}>
      <div className="featured-product">
        <div className="products6">
          <div className="a53d9-6929-4118-8838-2c10b17b6-parent">
            <img
              className="a53d9-6929-4118-8838-2c10b17b6-icon6"
              alt=""
              src="/789a53d96929411888382c10b17b6ce5png-5@2x.png"
            />
            <div className="favourite-icon">
              <img className="heart-icon6" alt="" src="/heart-5.svg" />
            </div>
          </div>
          <div className="mall-of-the-emirates-city-ce-parent2">
            <div className="mall-of-the6">{`Mall of the Emirates & City Center`}</div>
            <div className="first-product-availability">
              <div className="background12">
                <div className="container12">
                  <div className="online6">Online</div>
                </div>
              </div>
              <div className="background13">
                <div className="container13">
                  <div className="in-store6">In-Store</div>
                </div>
              </div>
            </div>
          </div>
          <div className="button16">
            <img className="tag-icon16" alt="" src="/tag-icon4.svg" />
            <div className="first-product-buy-button-conta">
              <div className="button17">Shop Now</div>
            </div>
            <img className="tag-icon17" alt="" src="/tag-icon-5.svg" />
          </div>
        </div>
        <div className="all-products">
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-6@2x.png" />
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-7@2x.png" />
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-8@2x.png" />
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-9@2x.png" />
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-10@2x.png" />
          <Products7 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-11@2x.png" />
        </div>
      </div>
    </section>
  );
};

ProductCarousel.propTypes = {
  className: PropTypes.string,
};

export default ProductCarousel;
