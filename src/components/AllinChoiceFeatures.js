import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AllinChoiceFeatures.css";

const AllinChoiceFeatures = ({
  className = "",
  allinChoiceFeatureIconIte,
  vector,
  vector1,
  vector2,
  vector3,
  propAlignSelf,
  propGap,
}) => {
  const allinChoiceFeaturesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
    };
  }, [propAlignSelf, propGap]);

  return (
    <div
      className={`allin-choice-features ${className}`}
      style={allinChoiceFeaturesStyle}
    >
      <div className="allin-choice-feature-icons-parent">
        <div className="allin-choice-feature-icons">
          <img
            className="allin-choice-feature-icon-item"
            alt=""
            src={allinChoiceFeatureIconIte}
          />
        </div>
        <div className="the-perfect-gift">
          The perfect gift for any occasion
        </div>
      </div>
      <div className="frame-parent">
        <div className="vector-wrapper">
          <img className="vector-icon4" alt="" src={vector} />
        </div>
        <div className="over-130-different">
          Over 130 different gift cards to choose from
        </div>
      </div>
      <div className="frame-group">
        <div className="vector-container">
          <img className="vector-icon5" alt="" src={vector1} />
        </div>
        <div className="the-perfect-solution">
          The perfect solution for corporate gifting
        </div>
      </div>
      <div className="frame-container">
        <div className="vector-frame">
          <img className="vector-icon6" alt="" src={vector2} />
        </div>
        <div className="available-as-a">
          Available as a physical or a digital card
        </div>
      </div>
      <div className="frame-parent1">
        <div className="vector-wrapper1">
          <img className="vector-icon7" alt="" src={vector3} />
        </div>
        <div className="available-to-order">
          Available to order in denominations of £10 to £500
        </div>
      </div>
    </div>
  );
};

AllinChoiceFeatures.propTypes = {
  className: PropTypes.string,
  allinChoiceFeatureIconIte: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
};

export default AllinChoiceFeatures;
