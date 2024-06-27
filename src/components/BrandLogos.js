import { Button } from "@mui/material";
import AllinChoiceFeatures from "./AllinChoiceFeatures";
import PropTypes from "prop-types";
import "./BrandLogos.css";

const BrandLogos = ({ className = "" }) => {
  return (
    <section className={`brand-logos ${className}`}>
      <div className="brand-logo-container">
        <div className="allin-choice">
          <div className="allin-choice-container">
            <div className="allin-choice-content">
              <div className="background12" />
              <div className="allin-choice-heading">
                <div className="heading-22">All-in-1 Choice Gift Card</div>
                <AllinChoiceFeatures
                  allinChoiceFeatureIconIte="/vector-4.svg"
                  vector="/vector-4.svg"
                  vector1="/vector-4.svg"
                  vector2="/vector-4.svg"
                  vector3="/vector-4.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="gc-uk-home-image-mockuppng-icon"
            loading="lazy"
            alt=""
            src="/gcukhomeimagemockuppng@2x.png"
          />
        </div>
        <div className="allin-choice-actions">
          <Button
            className="card-buttons"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#262626",
              fontSize: "16",
              background: "#fff",
              borderRadius: "20px",
              "&:hover": { background: "#fff" },
              width: 162,
              height: 46,
            }}
          >
            Purchase Now!
          </Button>
          <Button
            className="card-buttons1"
            disableElevation
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              borderColor: "#fff",
              borderRadius: "20px",
              "&:hover": { borderColor: "#fff" },
              height: 46,
            }}
          >
            Check Your Balance
          </Button>
        </div>
        <div className="adidas-logosvg-parent">
          <img
            className="adidas-logosvg-icon"
            alt=""
            src="/adidas-logosvg.svg"
          />
          <img
            className="airbnb-logosvg-icon"
            alt=""
            src="/airbnb-logosvg.svg"
          />
          <img className="asos-logosvg-icon" alt="" src="/airbnb-logosvg.svg" />
          <img
            className="boohoo-logosvg-icon"
            alt=""
            src="/boohoo-logosvg.svg"
          />
          <img
            className="decathlon-logosvg-icon"
            alt=""
            src="/decathlon-logosvg.svg"
          />
          <img
            className="deliveroo-logo-witsvg-icon"
            loading="lazy"
            alt=""
            src="/deliveroologowitsvg.svg"
          />
          <img
            className="foot-locker-logosvg-icon"
            alt=""
            src="/foot-locker-logosvg.svg"
          />
          <img
            className="gardengift-logosvg-icon"
            alt=""
            src="/boohoo-logosvg.svg"
          />
        </div>
        <div className="justeat-logosvg-parent">
          <img
            className="justeat-logosvg-icon"
            loading="lazy"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="love2shop-logosvg-icon"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="miller-and-carter-steakhouse-l-icon"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img
            className="new-look-logosvg-icon"
            alt=""
            src="/justeat-logosvg.svg"
          />
          <img className="nike-logosvg-icon" alt="" src="/nike-logosvg.svg" />
          <img
            className="primark-logo-witsvg-icon"
            loading="lazy"
            alt=""
            src="/primarklogowitsvg.svg"
          />
          <img
            className="riverisland-logosvg-icon"
            alt=""
            src="/riverislandlogosvg.svg"
          />
          <img
            className="sports-direct-logosvg-icon"
            alt=""
            src="/justeat-logosvg.svg"
          />
        </div>
      </div>
    </section>
  );
};

BrandLogos.propTypes = {
  className: PropTypes.string,
};

export default BrandLogos;
