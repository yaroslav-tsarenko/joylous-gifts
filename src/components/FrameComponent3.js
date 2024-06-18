import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`homepage-child ${className}`}>
      <div className="frame-container">
        <div className="payment-icon-wrapper-wrapper">
          <div className="payment-icon-wrapper">
            <div className="payment-icon-wrapper1">
              <div className="payment-icon-wrapper2">
                <h1 className="pay-the-way">{`Pay the way you prefer `}</h1>
                <div className="convenience-payment-wrapper">
                  <h3 className="convenient-payment-options">
                    Convenient Payment Options
                  </h3>
                </div>
              </div>
            </div>
            <div className="at-giftcard-paradise">
              At GiftCard Paradise, we believe in making your shopping
              experience as smooth as possible. That's why we offer multiple
              payment options to suit your needs. Whether you prefer using
              credit cards, digital wallets, or even cryptocurrencies, we've got
              you covered.
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="frame-wrapper">
            <div className="muchbettersvg-parent">
              <div className="muchbettersvg">
                <div className="group">
                  <img className="vector-icon" alt="" src="/vector.svg" />
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
              <div className="neosurfsvg">
                <div className="group1">
                  <img className="vector-icon1" alt="" src="/vector-1.svg" />
                  <img className="group-icon1" alt="" src="/group-1.svg" />
                </div>
              </div>
              <img
                className="netellersvg-icon"
                loading="lazy"
                alt=""
                src="/netellersvg.svg"
              />
              <img
                className="onebipsvg-icon"
                loading="lazy"
                alt=""
                src="/onebipsvg.svg"
              />
              <div className="payconiqsvg">
                <div className="group2">
                  <img className="vector-icon2" alt="" src="/vector-2.svg" />
                  <img className="group-icon2" alt="" src="/group-2.svg" />
                </div>
              </div>
              <div className="phonesvg">
                <div className="group3">
                  <img className="vector-icon3" alt="" src="/vector-3.svg" />
                  <img className="group-icon3" alt="" src="/group-3.svg" />
                </div>
              </div>
              <img
                className="skrillskrillsvg-icon"
                loading="lazy"
                alt=""
                src="/skrillskrillsvg.svg"
              />
              <img
                className="sofortsvg-icon"
                loading="lazy"
                alt=""
                src="/sofortsvg.svg"
              />
              <div className="trustlysvg">
                <div className="group4">
                  <img className="vector-icon4" alt="" src="/vector-4.svg" />
                  <img className="group-icon4" alt="" src="/group-4.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="payment-icons-bottom-row">
            <div className="dinrexpaypalsvg">
              <div className="group5">
                <img className="vector-icon5" alt="" src="/vector-5.svg" />
                <img className="group-icon5" alt="" src="/group-5.svg" />
              </div>
            </div>
            <div className="applepaysvg">
              <div className="group6">
                <img className="vector-icon6" alt="" src="/vector-6.svg" />
                <img className="group-icon6" alt="" src="/group-6.svg" />
              </div>
            </div>
            <div className="coinpaymentssvg">
              <div className="group7">
                <img className="vector-icon7" alt="" src="/vector-7.svg" />
                <img className="group-icon7" alt="" src="/group-7.svg" />
              </div>
            </div>
            <div className="creditcardsvg">
              <div className="group8">
                <img className="vector-icon8" alt="" src="/vector-6.svg" />
                <img className="group-icon8" alt="" src="/group-8.svg" />
              </div>
            </div>
            <div className="creditcard-amexsvg">
              <div className="group9">
                <img className="vector-icon9" alt="" src="/vector-9.svg" />
                <img className="group-icon9" alt="" src="/group-9@2x.png" />
              </div>
            </div>
            <div className="creditcard-mastercardsvg">
              <div className="group10">
                <img className="vector-icon10" alt="" src="/vector-6.svg" />
                <img className="group-icon10" alt="" src="/group-10.svg" />
              </div>
            </div>
            <div className="creditcard-visasvg">
              <div className="group11">
                <img className="vector-icon11" alt="" src="/vector-11.svg" />
                <img className="group-icon11" alt="" src="/group-11.svg" />
              </div>
            </div>
            <img
              className="daopaysvg-icon"
              loading="lazy"
              alt=""
              src="/daopaysvg.svg"
            />
            <img
              className="fortumosvg-icon"
              loading="lazy"
              alt=""
              src="/fortumosvg.svg"
            />
            <div className="giropaysvg">
              <div className="group12">
                <img className="vector-icon12" alt="" src="/vector-12.svg" />
                <img className="group-icon12" alt="" src="/group-12.svg" />
              </div>
            </div>
            <div className="idealsvg">
              <div className="group13">
                <img className="vector-icon13" alt="" src="/vector-13.svg" />
                <img className="group-icon13" alt="" src="/group-13.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
