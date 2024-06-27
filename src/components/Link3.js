import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link3.css";

const Link3 = ({
  className = "",
  background,
  congratulationsSmartEGift,
  card,
  propLeft,
  propTop,
}) => {
  const link2Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link40 ${className}`} style={link2Style}>
      <img
        className="background-icon14"
        loading="lazy"
        alt=""
        src={background}
      />
      <div className="congratulations-smart-egift-ca-wrapper">
        <div className="congratulations-smart-egift-container">
          <p className="congratulations-smart-egift">
            {congratulationsSmartEGift}
          </p>
          <p className="card2">{card}</p>
        </div>
      </div>
    </div>
  );
};

Link3.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  congratulationsSmartEGift: PropTypes.string,
  card: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link3;
