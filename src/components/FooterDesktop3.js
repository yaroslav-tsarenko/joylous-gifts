import PropTypes from "prop-types";
import "./FooterDesktop3.css";

const FooterDesktop3 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer1">
        <div className="footer-links1">
          <div className="footer-columns">
            <div className="logo2">
              <img
                className="logo-symbol-icon2"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="thejoyousgifts2">TheJoyousGifts</h1>
            </div>
            <div className="about-group">
              <h3 className="about3">About</h3>
              <div className="about4">About</div>
              <div className="faq1">FAQ</div>
              <div className="contact2">Contact</div>
              <div className="press1">Press</div>
              <div className="reviews1">Reviews</div>
            </div>
            <div className="footer-links2">
              <h3 className="product1">Product</h3>
              <div className="businesses1">Businesses</div>
              <div className="gift-card-incentives1">Gift Card Incentives</div>
            </div>
            <div className="footer-links3">
              <h3 className="legal1">Legal</h3>
              <div className="site-terms1">Site Terms</div>
              <div className="privacy1">Privacy</div>
            </div>
            <div className="footer-links4">
              <h3 className="use-gifthaven1">Use GiftHaven</h3>
              <div className="how-it-works1">How it works</div>
              <div className="why-us1">Why Us?</div>
              <div className="redeem1">Redeem</div>
            </div>
            <div className="footer-links5">
              <h3 className="other-stuff1">Other stuff</h3>
              <div className="blog2">Blog</div>
              <div className="gift-card-worth1">Gift Card Worth</div>
              <div className="sitemap1">Sitemap</div>
            </div>
          </div>
          <div className="category-list">
            <div className="categories3">Categories</div>
            <div className="restaurants-bars-spas-shopping1">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop3.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop3;
