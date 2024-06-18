import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header6 ${className}`}>
      <div className="frame-parent2">
        <div className="frame-parent3">
          <div className="excellent-parent">
            <div className="excellent2">Excellent</div>
            <div className="out-of-52">4.8 out of 5 Stars</div>
          </div>
          <div className="earn-15-points2">
            Earn 15 Points - Join GiftHaven Rewards
          </div>
          <div className="login-sign2">Login / Sign up</div>
        </div>
        <div className="logo-parent">
          <div className="logo5">
            <img
              className="logo-symbol-icon5"
              loading="lazy"
              alt=""
              src="/logo-symbol.svg"
            />
            <h1 className="thejoyousgifts5">TheJoyousGifts</h1>
          </div>
          <nav className="about-container">
            <div className="about8">About</div>
            <div className="blog5">Blog</div>
            <div className="work2">Work</div>
            <div className="platform2">Platform</div>
            <div className="contact5">Contact</div>
            <div className="shop4">Shop</div>
          </nav>
          <div className="shop-frame">
            <div className="shop5">Store Locator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
