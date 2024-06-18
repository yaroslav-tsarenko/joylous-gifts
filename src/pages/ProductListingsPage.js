import Header from "../components/Header";
import CategoryIcons from "../components/CategoryIcons";
import ProductGrid from "../components/ProductGrid";
import FooterDesktop2 from "../components/FooterDesktop2";
import "./ProductListingsPage.css";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop1 from "../components/FooterDesktop1";
import Footer from "../components/custom-footer/Footer";

const ProductListingsPage = () => {
  return (
      <>
          <Header/>
          <div className="productlistingspage">
              <Header/>
              <main className="content">
                  <div className="categories1">
                      <h3 className="categories2">Categories</h3>
                      <CategoryIcons/>
                  </div>
                  <ProductGrid/>
              </main>
              <FooterDesktop2/>
          </div>
          <Footer/>
      </>

  );
};

export default ProductListingsPage;
