import PropTypes from "prop-types";
import "./FeaturedCardSubtitles.css";

const FeaturedCardSubtitles = ({
  className = "",
  allIn1ChoiceGiftHref,
  allIn1Choice,
}) => {
  return (
    <div className={`featured-card-subtitles ${className}`}>
      <a
        className="all-in-1-choice-gift-container"
        href={allIn1ChoiceGiftHref}
        target="_blank"
      >
        <p className="all-in-1-choice">{allIn1Choice}</p>
        <p className="gift-card">Gift Card</p>
      </a>
      <div className="featured-card-subtitle-backgro">
        <img className="background-icon" alt="" src="/background.svg" />
      </div>
    </div>
  );
};

FeaturedCardSubtitles.propTypes = {
  className: PropTypes.string,
  allIn1ChoiceGiftHref: PropTypes.string.isRequired,
  allIn1Choice: PropTypes.string,
};

export default FeaturedCardSubtitles;
