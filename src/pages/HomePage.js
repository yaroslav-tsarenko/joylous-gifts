import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import ProductCarousel from "../components/ProductCarousel";
import FrameComponent3 from "../components/FrameComponent3";
import ProductGrid1 from "../components/ProductGrid1";
import FrameComponent2 from "../components/FrameComponent2";
import SingleBrandContainer from "../components/SingleBrandContainer";
import NewsletterBackground from "../components/NewsletterBackground";
import "./HomePage.css";
import Header from "../components/custom-header/Header";
import Footer from "../components/custom-footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <div className="homepage">
                <FrameComponent6/>
                <FrameComponent5/>
                <FrameComponent4/>
                <ProductCarousel/>
                <FrameComponent3/>
                <ProductGrid1/>
                <FrameComponent2/>
                <section className="single-brand-container-parent">
                    <SingleBrandContainer/>
                    <NewsletterBackground/>
                </section>
            </div>
            <Footer/>
        </>

    );
};

export default HomePage;
