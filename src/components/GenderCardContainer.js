import PropTypes from "prop-types";
import "./GenderCardContainer.css";

const GenderCardContainer = ({
  className = "",
  womenCardsTop,
  top10GiftCardsForWomen,
  areYouSeekingThePerfectGi,
}) => {
  return (
    <div className={`gender-card-container ${className}`}>
      <img
        className="women-cards-top"
        loading="lazy"
        alt=""
        src={womenCardsTop}
      />
      <div className="women-cards-bottom">
        <div className="top-10-gift">{top10GiftCardsForWomen}</div>
      </div>
      <div className="are-you-seeking-the-perfect-gi-wrapper">
        <div className="are-you-seeking">{areYouSeekingThePerfectGi}</div>
      </div>
    </div>
  );
};

GenderCardContainer.propTypes = {
  className: PropTypes.string,
  womenCardsTop: PropTypes.string,
  top10GiftCardsForWomen: PropTypes.string,
  areYouSeekingThePerfectGi: PropTypes.string,
};

export default GenderCardContainer;
