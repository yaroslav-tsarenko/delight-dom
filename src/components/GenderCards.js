import GenderCardContainer from "./GenderCardContainer";
import PropTypes from "prop-types";
import "./GenderCards.css";

const GenderCards = ({ className = "" }) => {
  return (
    <section className={`gender-cards ${className}`}>
      <GenderCardContainer
        womenCardsTop="/frame-1000007007@2x.png"
        top10GiftCardsForWomen="Top 10 gift cards for women"
        areYouSeekingThePerfectGi="Are you seeking the perfect gift for her that's both thoughtful and versatile, then look no further."
      />
      <div className="gender-card-container1">
        <img
          className="gender-card-container-child"
          loading="lazy"
          alt=""
          src="/frame-1000007007-1@2x.png"
        />
        <div className="gender-card-container-inner">
          <div className="top-10-most-popular-gift-cards-parent">
            <div className="top-10-most">
              Top 10 most popular gift cards for men
            </div>
            <div className="from-choice-gift">
              From Choice Gift Cards and gift cards of a specific brand to gift
              cards for a spectacular event or a weekend getaway.
            </div>
          </div>
        </div>
      </div>
      <GenderCardContainer
        womenCardsTop="/frame-1000007007-2@2x.png"
        top10GiftCardsForWomen="Top 10 gifts for men"
        areYouSeekingThePerfectGi="With our top 10 gifts for men, you’ll be sure to find the best tips for thoughtful and suitable gifts in various categories."
      />
    </section>
  );
};

GenderCards.propTypes = {
  className: PropTypes.string,
};

export default GenderCards;
