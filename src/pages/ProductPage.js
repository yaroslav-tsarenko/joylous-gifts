import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./ProductPage.css";
import Main from "../components/Main";
import CartItems from "../components/CartItems";
import Footer from "../components/custom-footer/Footer";

const ProductPage = () => {
  return (
      <>
          <Header/>
          <div className="productpage">
              <Header/>
              <section className="frame-parent">
                  <div className="amazon-gift-card-wrapper">
                      <h1 className="amazon-gift-card">Amazon Gift Card</h1>
                  </div>
                  <FrameComponent1/>
              </section>
              <FrameComponent/>
              <FooterDesktop1/>
          </div>
          <Footer/>
      </>
  );
};

export default ProductPage;
