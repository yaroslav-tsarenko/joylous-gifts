import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({ className = "" }) => {
  return (
    <header className={`header6 ${className}`}>
      <div className="main-content">
        <div className="rewards-login">
          <div className="rating1">
            <div className="excellent2">Excellent</div>
            <div className="out-of-52">4.8 out of 5 Stars</div>
          </div>
          <div className="earn-15-points2">
            Earn 15 Points - Join GiftHaven Rewards
          </div>
          <div className="login-sign2">Login / Sign up</div>
        </div>
        <div className="top-navigation">
          <div className="logo5">
            <img
              className="logo-symbol-icon5"
              loading="lazy"
              alt=""
              src="/logo-symbol.svg"
            />
            <h1 className="thejoyousgifts4">TheJoyousGifts</h1>
          </div>
          <nav className="navigation-links1">
            <div className="about6">About</div>
            <div className="blog4">Blog</div>
            <div className="work2">Work</div>
            <div className="platform2">Platform</div>
            <div className="contact4">Contact</div>
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

Header2.propTypes = {
  className: PropTypes.string,
};

export default Header2;
