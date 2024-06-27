import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero1 ${className}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="find-the-widest-container">
            <p className="find-the-widest">Find the widest range of</p>
            <p className="gift-cards-at">gift cards at DelightDome</p>
          </h1>
          <div className="corporate-gifting">
            <div className="corporate-gifting-icons">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <div className="convenient-fast-and">
                Convenient, fast and personalised corporate gifting
              </div>
            </div>
            <div className="corporate-gifting-icons1">
              <img className="vector-icon1" alt="" src="/vector.svg" />
              <div className="receive-digital-gift">
                Receive digital gift cards within minutes of ordering
              </div>
            </div>
            <div className="corporate-gifting-icons2">
              <img className="vector-icon2" alt="" src="/vector.svg" />
              <div className="physical-gift-cards">
                Physical gift cards delivered directly to your doorstep
              </div>
            </div>
            <div className="corporate-gifting-icons3">
              <img className="vector-icon3" alt="" src="/vector.svg" />
              <div className="find-the-perfect">
                Find the perfect gift with our collection of over 130 gift cards
              </div>
            </div>
          </div>
          <div className="gift-card-actions">
            <Button
              className="gift-card-action-links"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#262626",
                borderRadius: "20px",
                "&:hover": { background: "#262626" },
                width: 183,
                height: 46,
              }}
            >
              View all gift cards
            </Button>
            <Button
              className="gift-card-action-links1"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#262626",
                fontSize: "16",
                borderColor: "#262626",
                borderRadius: "20px",
                "&:hover": { borderColor: "#262626" },
                height: 46,
              }}
            >
              Check your balance
            </Button>
          </div>
        </div>
        <img
          className="gc-uk-home-image-bannerpng-icon"
          loading="lazy"
          alt=""
          src="/gcukhomeimagebannerpng@2x.png"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
