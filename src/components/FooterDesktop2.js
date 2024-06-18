import PropTypes from "prop-types";
import "./FooterDesktop2.css";

const FooterDesktop2 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop4 ${className}`}>
      <div className="footer4">
        <div className="footer-links-parent">
          <div className="footer-links8">
            <div className="logo7">
              <img
                className="logo-symbol-icon7"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="thejoyousgifts7">TheJoyousGifts</h1>
            </div>
            <div className="about-links2">
              <h3 className="about11">About</h3>
              <div className="about12">About</div>
              <div className="faq4">FAQ</div>
              <div className="contact7">Contact</div>
              <div className="press4">Press</div>
              <div className="reviews4">Reviews</div>
            </div>
            <div className="product-group">
              <h3 className="product6">Product</h3>
              <div className="businesses4">Businesses</div>
              <div className="gift-card-incentives4">Gift Card Incentives</div>
            </div>
            <div className="legal-group">
              <h3 className="legal4">Legal</h3>
              <div className="site-terms4">Site Terms</div>
              <div className="privacy4">Privacy</div>
            </div>
            <div className="use-gifthaven-group">
              <h3 className="use-gifthaven4">Use GiftHaven</h3>
              <div className="how-it-works4">How it works</div>
              <div className="why-us4">Why Us?</div>
              <div className="redeem4">Redeem</div>
            </div>
            <div className="other-stuff-group">
              <h3 className="other-stuff4">Other stuff</h3>
              <div className="blog7">Blog</div>
              <div className="gift-card-worth4">Gift Card Worth</div>
              <div className="sitemap4">Sitemap</div>
            </div>
          </div>
          <div className="category-summary">
            <div className="categories7">Categories</div>
            <div className="restaurants-bars-spas-shopping4">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop2.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop2;
