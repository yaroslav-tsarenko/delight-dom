import BusinessOptionItems from "./BusinessOptionItems";
import PropTypes from "prop-types";
import "./Business.css";

const Business = ({ className = "" }) => {
  return (
    <section className={`business ${className}`}>
      <div className="business-container">
        <div className="background11" />
        <div className="business-content">
          <div className="business-heading">
            <div className="heading-21">Business options</div>
            <div className="surprising-additional-options">
              Surprising additional options for our corporate clients.
            </div>
          </div>
          <div className="business-options">
            <div className="business-options-container">
              <BusinessOptionItems
                icon1png="/icon1png@2x.png"
                orderDirectly="Order directly"
                chooseFromOneOfOurManyTop="Choose from one of our many top gift card brands in the UK and"
                convenientlyPayByInvoiceL="conveniently pay by invoice later."
              />
              <BusinessOptionItems
                icon1png="/icon2png@2x.png"
                orderDirectly="Customise for a unique gift"
                chooseFromOneOfOurManyTop="Have your own company logo printed on our All-in-1 Choice Gift"
                convenientlyPayByInvoiceL="Card."
                propPadding="0px 4px 0px 0px"
              />
              <BusinessOptionItems
                icon1png="/icon3png@2x.png"
                orderDirectly="Request a quote"
                chooseFromOneOfOurManyTop="Receive a custom quote. We are happy to assist you with our"
                convenientlyPayByInvoiceL="ideas!"
                propPadding="0px 26px 0px 0px"
              />
            </div>
            <img
              className="gc-uk-home-banner-yourownlogo-icon"
              loading="lazy"
              alt=""
              src="/gc-uk-home-banner-yourownlogopng@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Business.propTypes = {
  className: PropTypes.string,
};

export default Business;
