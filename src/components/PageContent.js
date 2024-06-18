import SignIn from "./SignIn";
import PropTypes from "prop-types";
import "./PageContent.css";

const PageContent = ({ className = "" }) => {
  return (
    <section className={`page-content1 ${className}`}>
      <div className="sign-up-container">
        <SignIn />
      </div>
      <img
        className="form-background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
};

export default PageContent;
