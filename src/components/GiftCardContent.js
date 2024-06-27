import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./GiftCardContent.css";

const GiftCardContent = ({ className = "" }) => {
  return (
    <div className={`gift-card-content1 ${className}`}>
      <div className="gift-card-content-child" />
      <div className="card-image">
        <img
          className="image-icon4"
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
        <div className="gift-card-value">
          <div className="gift-card-120">Gift Card $120</div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="quantity-control">
          <div className="quantity-buttons">
            <div className="plus-minus-spacer">$120.00</div>
            <div className="credits">12 Credits</div>
          </div>
          <div className="quantity-button-container">
            <div className="plus-button">
              <div className="plus-icon">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <div className="button-spacer">3</div>
              <input className="minus-button" type="checkbox" />
            </div>
            <FormControl
              className="hourly-control"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#262626",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="success" />
              <Select
                color="success"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972-1.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="gift-card-spacer">$120.00</div>
      </div>
    </div>
  );
};

GiftCardContent.propTypes = {
  className: PropTypes.string,
};

export default GiftCardContent;
