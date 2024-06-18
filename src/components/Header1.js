import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-left">
        <div className="rewards-login">
          <div className="rating">
            <div className="excellent">Excellent</div>
            <div className="out-of-5">4.8 out of 5 Stars</div>
          </div>
          <div className="earn-15-points">
            Earn 15 Points - Join GiftHaven Rewards
          </div>
          <div className="login-sign">Login / Sign up</div>
        </div>
        <div className="header-right">
          <div className="logo1">
            <img className="logo-symbol-icon1" alt="" src="/logo-symbol.svg" />
            <h1 className="thejoyousgifts1">TheJoyousGifts</h1>
          </div>
          <nav className="navigation">
            <div className="about2">About</div>
            <div className="blog1">Blog</div>
            <div className="work">Work</div>
            <div className="platform">Platform</div>
            <div className="contact1">Contact</div>
            <div className="shop">Shop</div>
          </nav>
          <div className="shop-wrapper">
            <div className="shop1">Store Locator</div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
