import Component from "../components/Component";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import BusinessPersonalization from "../components/BusinessPersonalization";
import Business from "../components/Business";
import BrandLogos from "../components/BrandLogos";
import CardHighlight from "../components/CardHighlight";
import GenderCards from "../components/GenderCards";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Component />
      <Hero />
      <Featured />
      <BusinessPersonalization />
      <Business />
      <BrandLogos />
      <CardHighlight />
      <GenderCards />
      <Footer />
    </div>
  );
};

export default HomePage;
