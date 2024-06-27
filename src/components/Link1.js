import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({
  className = "",
  imageShadow,
  beautyFashion,
  choiceGiftCard,
  propLeft,
  propTop,
}) => {
  const linkStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link ${className}`} style={linkStyle}>
      <div className="background4">
        <div className="wrapper-imageshadow">
          <img
            className="imageshadow-icon"
            loading="lazy"
            alt=""
            src={imageShadow}
          />
        </div>
      </div>
      <div className="beauty-fashion-choice-gift-c-parent">
        <div className="beauty-fashion-container">
          <p className="beauty-fashion">{beautyFashion}</p>
          <p className="choice-gift-card">{choiceGiftCard}</p>
        </div>
        <div className="background-wrapper">
          <img className="background-icon1" alt="" src="/background.svg" />
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  imageShadow: PropTypes.string,
  beautyFashion: PropTypes.string,
  choiceGiftCard: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link1;
