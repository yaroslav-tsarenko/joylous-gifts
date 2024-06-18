import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({
  className = "",
  welcomeDarnell,
  yourPersonalDashboard,
  headerTop,
  headerPosition,
}) => {
  const headerStyle = useMemo(() => {
    return {
      top: headerTop,
      position: headerPosition,
    };
  }, [headerTop, headerPosition]);

  return (
    <section className={`main ${className}`}>
      <div className="header1" style={headerStyle}>
        <div className="header-wrapper">
          <div className="header-navigation">
            <div className="product-rating">
              <div className="excellent1">Excellent</div>
              <div className="out-of-51">4.8 out of 5 Stars</div>
            </div>
            <div className="earn-15-points1">
              Earn 15 Points - Join GiftHaven Rewards
            </div>
            <div className="login-sign1">Login / Sign up</div>
          </div>
          <header className="brand-info">
            <div className="logo3">
              <img
                className="logo-symbol-icon3"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h1 className="thejoyousgifts3">TheJoyousGifts</h1>
            </div>
            <nav className="site-navigation">
              <div className="about5">About</div>
              <div className="blog3">Blog</div>
              <div className="work1">Work</div>
              <div className="platform1">Platform</div>
              <div className="contact3">Contact</div>
              <div className="shop2">Shop</div>
            </nav>
            <div className="shop-container">
              <div className="shop3">Store Locator</div>
            </div>
          </header>
        </div>
      </div>
      <div className="greeting-wrapper">
        <div className="greeting">
          <div className="welcome-darnell-wrapper">
            <h1 className="welcome-darnell">{welcomeDarnell}</h1>
          </div>
          <b className="your-personal-dashboard">{yourPersonalDashboard}</b>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  welcomeDarnell: PropTypes.string,
  yourPersonalDashboard: PropTypes.string,

  /** Style props */
  headerTop: PropTypes.any,
  headerPosition: PropTypes.any,
};

export default Main;
