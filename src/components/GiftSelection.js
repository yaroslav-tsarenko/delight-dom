import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./GiftSelection.css";

const GiftSelection = ({ className = "" }) => {
  return (
    <section className={`gift-selection ${className}`}>
      <div className="horizontalborder">
        <div className="brand-search">
          <TextField
            className="input-search-brands"
            placeholder="Search Brands"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#262626" },
              "& .MuiInputBase-root": { height: "48px", borderRadius: "25px" },
              "& .MuiInputBase-input": { color: "#302f2f" },
            }}
          />
        </div>
        <div className="button-menu">
          <div className="who-is-it">Who is it for?</div>
          <div className="filter-content">
            <div className="filter-icons">
              <img className="img-icon" alt="" src="/img.svg" />
              <img className="img-icon1" alt="" src="/img-1.svg" />
            </div>
          </div>
        </div>
        <div className="button-menu1">
          <div className="whats-the-occasion">What's the occasion?</div>
          <div className="img-wrapper">
            <img className="img-icon2" alt="" src="/img.svg" />
          </div>
        </div>
        <div className="button-menu2">
          <div className="what-are-their">What are their interests?</div>
          <div className="img-container">
            <img className="img-icon3" alt="" src="/img-3.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

GiftSelection.propTypes = {
  className: PropTypes.string,
};

export default GiftSelection;
