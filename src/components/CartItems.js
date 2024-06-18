import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="header4">
            <div className="header-child" />
            <div className="product-name">
              <b className="product4">Product</b>
            </div>
            <div className="price-quantity">
              <b className="price">Price</b>
              <b className="quantity1">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemRow
            fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
            discount20OFF="Discount: 20% OFF"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
            discount20OFF="Worth USD $400"
            propLineHeight="120%"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Travel GiftCard"
            discount20OFF="Worth USD $400"
            propLineHeight="22px"
          />
          <div className="action-buttons">
            <button className="button31">
              <img className="tag-icon30" alt="" src="/tag-icon.svg" />
              <b className="button32">Go Back</b>
              <img className="tag-icon31" alt="" src="/tag-icon.svg" />
            </button>
            <button className="button33">
              <img className="tag-icon32" alt="" src="/tag-icon.svg" />
              <b className="button34">Checkout</b>
              <img className="tag-icon33" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
        <div className="checkout-details1">
          <div className="checkout-header">
            <div className="header5">
              <b className="checkout-details2">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="value-container">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="charges-details">
            <div className="charges-container">
              <div className="charge-labels">
                <b className="shipping-handling">{`Shipping & Handling`}</b>
                <b className="other-taxes">Other Taxes</b>
              </div>
              <div className="charge-labels1">
                <b className="b">$0.00</b>
                <b className="b1">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-details-inner">
            <div className="frame-child" />
          </div>
          <div className="subtotal-total1">
            <div className="grand-total-parent">
              <b className="grand-total">Grand Total</b>
              <b className="b2">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
