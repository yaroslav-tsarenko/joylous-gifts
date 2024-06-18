import PropTypes from "prop-types";
import "./NewsletterBackground.css";

const NewsletterBackground = ({ className = "" }) => {
  return (
    <div className={`newsletter-background ${className}`}>
      <div className="background20">
        <div className="sign-up-newsletter-sendpng-parent">
          <img
            className="sign-up-newsletter-sendpng-icon"
            loading="lazy"
            alt=""
            src="/signupnewslettersendpng@2x.png"
          />
          <img
            className="sign-up-newsletter-menpng-icon"
            alt=""
            src="/signupnewslettermenpng@2x.png"
          />
        </div>
        <div className="newsletter-form">
          <div className="container24">
            <div className="background21">
              <div className="image">
                <img
                  className="pattern-dundle-whitesvg-icon"
                  loading="lazy"
                  alt=""
                  src="/patterndundlewhitesvg.svg"
                />
                <div className="container25">
                  <div className="container26">
                    <div className="heading-2">
                      <h3 className="sign-up-for">{`Sign Up For News & Offers From TheJoyousGifts`}</h3>
                    </div>
                    <div className="container27">
                      <div className="get-email-updates">
                        Get email updates on newly restocked codes, discounts,
                        deals, and more!
                      </div>
                    </div>
                    <div className="container28">
                      <div className="container29">
                        <div className="container30">
                          <div className="input">
                            <div className="container31">
                              <div className="enter-your-email">{`Enter your email address `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="buttonmargin">
                        <div className="button30">
                          <div className="sign-up">Sign Up</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsletterBackground.propTypes = {
  className: PropTypes.string,
};

export default NewsletterBackground;
