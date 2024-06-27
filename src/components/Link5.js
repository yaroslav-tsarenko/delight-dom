import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link5.css";

const Link5 = ({
  className = "",
  background,
  backToSchoolSmartEGift,
  celebrateBackToSchool,
  propTop,
  propLeft,
}) => {
  const link1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`link39 ${className}`} style={link1Style}>
      <img
        className="background-icon13"
        loading="lazy"
        alt=""
        src={background}
      />
      <div className="link-child">
        <div className="back-to-school-smart-egift-car-parent">
          <div className="back-to-school-container">
            <p className="back-to-school">{backToSchoolSmartEGift}</p>
            <p className="card1">Card</p>
          </div>
          <div className="heading-5">
            <div className="celebrate-back-to">{celebrateBackToSchool}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Link5.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  backToSchoolSmartEGift: PropTypes.string,
  celebrateBackToSchool: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Link5;
