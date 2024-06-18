import PropTypes from "prop-types";
import "./Header3.css";

const Header3 = ({ className = "" }) => {
  return (
    <div className={`header7 ${className}`}>
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="excellent-parent">
            <div className="excellent3">Excellent</div>
            <div className="out-of-53">4.8 out of 5 Stars</div>
          </div>
          <div className="earn-15-points3">
            Earn 15 Points - Join GiftHaven Rewards
          </div>
          <div className="login-sign3">Login / Sign up</div>
        </div>
        <header className="logo-container">
          <div className="logo7">
            <img
              className="logo-symbol-icon7"
              loading="lazy"
              alt=""
              src="/logo-symbol.svg"
            />
            <h1 className="thejoyousgifts6">TheJoyousGifts</h1>
          </div>
          <nav className="about-parent">
            <div className="about9">About</div>
            <div className="blog6">Blog</div>
            <div className="work3">Work</div>
            <div className="platform3">Platform</div>
            <div className="contact6">Contact</div>
            <div className="shop6">Shop</div>
          </nav>
          <div className="shop-wrapper1">
            <div className="shop7">Store Locator</div>
          </div>
        </header>
      </div>
    </div>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
