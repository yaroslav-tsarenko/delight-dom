import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BusinessOptionItems.css";

const BusinessOptionItems = ({
  className = "",
  icon1png,
  orderDirectly,
  chooseFromOneOfOurManyTop,
  convenientlyPayByInvoiceL,
  propPadding,
}) => {
  const businessOptionItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`business-option-items ${className}`}
      style={businessOptionItemsStyle}
    >
      <img className="icon-1png" loading="lazy" alt="" src={icon1png} />
      <div className="business-option-descriptions">
        <div className="order-directly">{orderDirectly}</div>
        <div className="choose-from-one-container">
          <p className="choose-from-one">{chooseFromOneOfOurManyTop}</p>
          <p className="conveniently-pay-by">{convenientlyPayByInvoiceL}</p>
        </div>
      </div>
    </div>
  );
};

BusinessOptionItems.propTypes = {
  className: PropTypes.string,
  icon1png: PropTypes.string,
  orderDirectly: PropTypes.string,
  chooseFromOneOfOurManyTop: PropTypes.string,
  convenientlyPayByInvoiceL: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default BusinessOptionItems;
