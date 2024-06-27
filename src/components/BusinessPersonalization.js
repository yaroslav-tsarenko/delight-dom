import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./BusinessPersonalization.css";

const BusinessPersonalization = ({ className = "" }) => {
  return (
    <section className={`business-personalization ${className}`}>
      <div className="business-personalization-conte">
        <FrameComponent
          businessPersonalizeAGiftC="Business: personalize a gift card."
          addYourLogoAPersonalMessa="Add your logo, a personal message, and a festive packaging."
          gcUkHomepageBannerCadeaut="/gcukhomepagebannercadeautippersonalizationspng@2x.png"
        />
        <FrameComponent
          businessPersonalizeAGiftC="Looking for a last-minute gift?"
          addYourLogoAPersonalMessa="Then buy an E-gift card! Explore all our E-gift cards here."
          gcUkHomepageBannerCadeaut="/tegelafbeeldinghomepagedigitaalpng@2x.png"
        />
      </div>
    </section>
  );
};

BusinessPersonalization.propTypes = {
  className: PropTypes.string,
};

export default BusinessPersonalization;
