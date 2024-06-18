import Main from "../components/Main";
import Content from "../components/Content";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";
import Header from "../components/custom-header/Header";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import ProductCarousel from "../components/ProductCarousel";
import FrameComponent3 from "../components/FrameComponent3";
import ProductGrid1 from "../components/ProductGrid1";
import FrameComponent2 from "../components/FrameComponent2";
import SingleBrandContainer from "../components/SingleBrandContainer";
import NewsletterBackground from "../components/NewsletterBackground";
import Footer from "../components/custom-footer/Footer";

const AccountPage = () => {
  return (

      <>
          <Header/>
          <div className="accountpage">
              <Main
                  welcomeDarnell="Welcome, Darnell"
                  yourPersonalDashboard="Your Personal Dashboard"
              />
              <Content/>
              <FooterDesktop/>
          </div>

          <Footer/>
      </>

  );
};

export default AccountPage;
