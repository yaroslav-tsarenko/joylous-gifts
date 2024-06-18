import Main from "../components/Main";
import CartItems from "../components/CartItems";
import "./CartDetailsPage.css";
import Header from "../components/custom-header/Header";
import Content from "../components/Content";
import FooterDesktop from "../components/FooterDesktop";
import Footer from "../components/custom-footer/Footer";

const CartDetailsPage = () => {
  return (

      <>
        <Header/>
        <div className="cartdetailspage">
          <Main
              welcomeDarnell="Your Cart"
              yourPersonalDashboard="View or edit your cart before checkout"
              headerTop="unset"
              headerPosition="unset"
          />
          <CartItems/>
          <footer className="footer-desktop">
            <div className="footer">
              <div className="footer-links">
                <div className="link-columns">
                  <div className="logo">
                    <img
                        className="logo-symbol-icon"
                        alt=""
                        src="/logo-symbol-1.svg"
                    />
                    <h2 className="thejoyousgifts">TheJoyousGifts</h2>
                  </div>
                  <div className="about-parent">
                    <b className="about">About</b>
                    <div className="about1">About</div>
                    <div className="faq">FAQ</div>
                    <div className="contact">Contact</div>
                    <div className="press">Press</div>
                    <div className="reviews">Reviews</div>
                  </div>
                  <div className="column-labels">
                    <b className="product">Product</b>
                    <div className="businesses">Businesses</div>
                    <div className="gift-card-incentives">Gift Card Incentives</div>
                  </div>
                  <div className="column-labels1">
                    <b className="legal">Legal</b>
                    <div className="site-terms">Site Terms</div>
                    <div className="privacy">Privacy</div>
                  </div>
                  <div className="column-labels2">
                    <b className="use-gifthaven">Use GiftHaven</b>
                    <div className="how-it-works">How it works</div>
                    <div className="why-us">Why Us?</div>
                    <div className="redeem">Redeem</div>
                  </div>
                  <div className="column-labels3">
                    <b className="other-stuff">Other stuff</b>
                    <div className="blog">Blog</div>
                    <div className="gift-card-worth">Gift Card Worth</div>
                    <div className="sitemap">Sitemap</div>
                  </div>
                </div>
                <div className="categories-parent">
                  <div className="categories">Categories</div>
                  <div
                      className="restaurants-bars-spas-shopping">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <Footer/>
      </>
  );
};

export default CartDetailsPage;
