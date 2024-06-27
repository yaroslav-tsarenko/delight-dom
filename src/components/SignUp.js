import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignUp.css";

const SignUp = ({ className = "" }) => {
  return (
    <section className={`sign-up ${className}`}>
      <div className="sign-up-form">
        <div className="sign-in2">
          <div className="sign-up-title">
            <h1 className="sign-up1">Sign up</h1>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="sign-up-fields">
            <div className="name-address-username">
              <div className="name-address-username-fields">
                <div className="your-name">Your Name</div>
              </div>
              <TextField
                className="email-country-password"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-username1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country">Country</div>
                <img
                  className="email-country-password-spacers"
                  alt=""
                  src="/email-country-password-spacers.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <div className="username-parent">
                <div className="username">Username</div>
                <img
                  className="name-address-username-spacers"
                  alt=""
                  src="/frame-153-11.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-child" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <Button
              className="button1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#262626",
                borderRadius: "4px",
                "&:hover": { background: "#262626" },
                height: 54,
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="sign-up-options">
            <img
              className="sign-up-options-child"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="sign-up-options-item"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="sign-up-options-inner"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="background-icon1"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

SignUp.propTypes = {
  className: PropTypes.string,
};

export default SignUp;
