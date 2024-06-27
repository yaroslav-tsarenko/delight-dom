import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link4.css";

const Link4 = ({
  className = "",
  background,
  heading4KrogerEGiftCard,
  propLeft,
}) => {
  const link4Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`link42 ${className}`} style={link4Style}>
      <img
        className="background-icon16"
        loading="lazy"
        alt=""
        src={background}
      />
      <div className="link-inner1">
        <div className="heading-4-kroger-egift-card-parent">
          <div className="heading-41">{heading4KrogerEGiftCard}</div>
          <div className="heading-51">
            <div className="new-arrival">New Arrival</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link4.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4KrogerEGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default Link4;
