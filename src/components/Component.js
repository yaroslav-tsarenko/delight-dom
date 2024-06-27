import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "" }) => {
  return (
    <div className={`component-1 ${className}`}>
      <header className="nav">
        <div className="choice-gift-card-link">
          <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
          <div className="container-wrapper">
            <FormControl
              className="container"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#0f0a1b",
                  fontSize: 17.2,
                  fontWeight: "Semi Bold",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img width="24px" height="24px" src="/svg.svg" style={{}} />
                )}
              >
                <MenuItem>Categories</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="link-wrapper">
            <div className="link14">
              <a
                className="redeem-choice-gift"
                href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1667"
                target="_blank"
              >
                Redeem Choice Gift Card
              </a>
            </div>
          </div>
          <div className="link-wrapper1">
            <div className="link15">
              <a className="choice-gift-card1">Choice Gift Card</a>
            </div>
          </div>
        </div>
        <div className="business-link">
          <div className="customer-service-link">
            <div className="customer-service-wrapper">
              <div className="link16">
                <a className="business1">Business</a>
              </div>
            </div>
            <div className="customer-service-wrapper1">
              <div className="link17">
                <a className="customer-service">Customer service</a>
              </div>
            </div>
            <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
          </div>
        </div>
      </header>
      <TextField
        className="component-1-child"
        placeholder="What are you looking for?"
        variant="outlined"
        InputProps={{
          startAdornment: <img width="15.6px" height="16px" src="/svg-1.svg" />,
        }}
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "86px",
            backgroundColor: "#262626",
            paddingLeft: "120px",
            borderRadius: "0px 0px 0px 0px",
            fontSize: "17.9px",
          },
          "& .MuiInputBase-input": { paddingLeft: "14px", color: "#fff" },
        }}
      />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
