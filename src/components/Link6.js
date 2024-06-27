import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link6.css";

const Link6 = ({
  className = "",
  background,
  heading4OhBabySmartEGiftC,
  propLeft,
  propTop,
}) => {
  const link3Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link41 ${className}`} style={link3Style}>
      <img
        className="background-icon15"
        loading="lazy"
        alt=""
        src={background}
      />
      <div className="heading-4-oh-baby-smart-egi-wrapper">
        <div className="heading-4">{heading4OhBabySmartEGiftC}</div>
      </div>
    </div>
  );
};

Link6.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4OhBabySmartEGiftC: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link6;
