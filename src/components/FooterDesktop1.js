import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop3 ${className}`}>
      <div className="footer3">
        <div className="footer-links7">
          <div className="link-categories">
            <div className="logo6">
              <img
                className="logo-symbol-icon6"
                alt=""
                src="/logo-symbol-1.svg"
              />
              <h1 className="thejoyousgifts6">TheJoyousGifts</h1>
            </div>
            <div className="about-links1">
              <h3 className="about9">About</h3>
              <div className="about10">About</div>
              <div className="faq3">FAQ</div>
              <div className="contact6">Contact</div>
              <div className="press3">Press</div>
              <div className="reviews3">Reviews</div>
            </div>
            <div className="link-headers">
              <h3 className="product5">Product</h3>
              <div className="businesses3">Businesses</div>
              <div className="gift-card-incentives3">Gift Card Incentives</div>
            </div>
            <div className="link-headers1">
              <h3 className="legal3">Legal</h3>
              <div className="site-terms3">Site Terms</div>
              <div className="privacy3">Privacy</div>
            </div>
            <div className="link-headers2">
              <h3 className="use-gifthaven3">Use GiftHaven</h3>
              <div className="how-it-works3">How it works</div>
              <div className="why-us3">Why Us?</div>
              <div className="redeem3">Redeem</div>
            </div>
            <div className="link-headers3">
              <h3 className="other-stuff3">Other stuff</h3>
              <div className="blog6">Blog</div>
              <div className="gift-card-worth3">Gift Card Worth</div>
              <div className="sitemap3">Sitemap</div>
            </div>
          </div>
          <div className="category-links">
            <div className="categories6">Categories</div>
            <div className="restaurants-bars-spas-shopping3">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
