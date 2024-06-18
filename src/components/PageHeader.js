import Header1 from "./Header1";
import PropTypes from "prop-types";
import "./PageHeader.css";

const PageHeader = ({ className = "" }) => {
  return (
    <section className={`page-header ${className}`}>
      <Header1 />
      <div className="image-carousel">
        <img
          className="e5981823-bb18-4432-a701-16ae11-icon"
          loading="lazy"
          alt=""
          src="/e5981823bb184432a70116ae112cde2bpng@2x.png"
        />
        <div className="baab3fa-94a0-49c1-bb43-73c7a62">
          <img
            className="pngwing-2-icon"
            loading="lazy"
            alt=""
            src="/pngwing-2@2x.png"
          />
        </div>
        <div className="c548dd9-6d88-431b-8443-dc006c0">
          <img
            className="pngwing-3-icon"
            loading="lazy"
            alt=""
            src="/pngwing-3@2x.png"
          />
        </div>
        <img
          className="c548dd9-6d88-431b-8443-dc006c0-icon"
          loading="lazy"
          alt=""
          src="/6c548dd96d88431b8443dc006c02f79cpng1@2x.png"
        />
        <img
          className="b072e1f1-bb39-4194-b050-997af5-icon"
          loading="lazy"
          alt=""
          src="/b072e1f1bb394194b050997af5c10fcdpng@2x.png"
        />
      </div>
    </section>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

export default PageHeader;
