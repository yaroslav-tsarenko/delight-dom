import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  businessPersonalizeAGiftC,
  addYourLogoAPersonalMessa,
  gcUkHomepageBannerCadeaut,
}) => {
  return (
    <div className={`business-personalization-headi-parent ${className}`}>
      <div className="business-personalization-headi">
        <h1 className="business-personalize-a">{businessPersonalizeAGiftC}</h1>
        <div className="add-your-logo">{addYourLogoAPersonalMessa}</div>
      </div>
      <img
        className="gc-uk-homepage-banner-cadeauti-icon"
        loading="lazy"
        alt=""
        src={gcUkHomepageBannerCadeaut}
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  businessPersonalizeAGiftC: PropTypes.string,
  addYourLogoAPersonalMessa: PropTypes.string,
  gcUkHomepageBannerCadeaut: PropTypes.string,
};

export default FrameComponent;
