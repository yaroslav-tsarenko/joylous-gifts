import Products4 from "./Products4";
import Products3 from "./Products3";
import PropTypes from "prop-types";
import "./SingleBrandContainer.css";

const SingleBrandContainer = ({ className = "" }) => {
  return (
    <div className={`single-brand-container ${className}`}>
      <h1 className="heading-1">Brand eGift Cards</h1>
      <div className="single-brand-products-slider">
        <Products4 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-12@2x.png" />
        <Products3 a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-13@2x.png" />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-14@2x.png"
          propLeft="780px"
          propTop="0px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-15@2x.png"
          propLeft="1170px"
          propTop="0px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-16@2x.png"
          propLeft="0px"
          propTop="483.2px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-17@2x.png"
          propLeft="390px"
          propTop="483.2px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-18@2x.png"
          propLeft="780px"
          propTop="483.2px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-19@2x.png"
          propLeft="1170px"
          propTop="483.2px"
        />
        <Products3
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-20@2x.png"
          propLeft="0px"
          propTop="966.4px"
        />
        <Products4
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-21@2x.png"
          propTop="966.4px"
          propLeft="390px"
        />
        <Products4
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-22@2x.png"
          propTop="966.4px"
          propLeft="780px"
        />
        <Products4
          a53d96929411888382c10b17b="/789a53d96929411888382c10b17b6ce5png-23@2x.png"
          propTop="966.4px"
          propLeft="1170px"
        />
      </div>
    </div>
  );
};

SingleBrandContainer.propTypes = {
  className: PropTypes.string,
};

export default SingleBrandContainer;
