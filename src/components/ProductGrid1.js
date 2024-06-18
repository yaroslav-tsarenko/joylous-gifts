import Products6 from "./Products6";
import PropTypes from "prop-types";
import "./ProductGrid1.css";

const ProductGrid1 = ({ className = "" }) => {
  return (
    <section className={`product-grid ${className}`}>
      <div className="product-trio">
        <div className="products-parent">
          <Products6 />
          <Products6 propBackgroundImage="url('/789a53d96929411888382c10b17b6ce5png2@3x.png')" />
          <Products6 propBackgroundImage="url('/789a53d96929411888382c10b17b6ce5png3@3x.png')" />
        </div>
        <div className="pagination">
          <div className="page-navigation">
            <img className="arrow-left-icon3" alt="" src="/arrowleft.svg" />
            <div className="page-number">
              <div className="ellipsis-container">
                <div className="page-dots" />
                <div className="page-dots1" />
              </div>
            </div>
            <img className="arrow-right-icon1" alt="" src="/arrowright-1.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

ProductGrid1.propTypes = {
  className: PropTypes.string,
};

export default ProductGrid1;
