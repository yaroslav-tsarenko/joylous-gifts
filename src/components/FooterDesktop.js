import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop2 ${className}`}>
      <div className="footer2">
        <div className="footer-content">
          <div className="footer-links6">
            <div className="logo4">
              <img
                className="logo-symbol-icon4"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="thejoyousgifts4">TheJoyousGifts</h1>
            </div>
            <div className="about-links">
              <h3 className="about6">About</h3>
              <div className="about7">About</div>
              <div className="faq2">FAQ</div>
              <div className="contact4">Contact</div>
              <div className="press2">Press</div>
              <div className="reviews2">Reviews</div>
            </div>
            <div className="product-parent">
              <h3 className="product3">Product</h3>
              <div className="businesses2">Businesses</div>
              <div className="gift-card-incentives2">Gift Card Incentives</div>
            </div>
            <div className="legal-parent">
              <h3 className="legal2">Legal</h3>
              <div className="site-terms2">Site Terms</div>
              <div className="privacy2">Privacy</div>
            </div>
            <div className="use-gifthaven-parent">
              <h3 className="use-gifthaven2">Use GiftHaven</h3>
              <div className="how-it-works2">How it works</div>
              <div className="why-us2">Why Us?</div>
              <div className="redeem2">Redeem</div>
            </div>
            <div className="other-stuff-parent">
              <h3 className="other-stuff2">Other stuff</h3>
              <div className="blog4">Blog</div>
              <div className="gift-card-worth2">Gift Card Worth</div>
              <div className="sitemap2">Sitemap</div>
            </div>
          </div>
          <div className="categories4">
            <div className="categories5">Categories</div>
            <div className="restaurants-bars-spas-shopping2">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
