import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./UserAccount.css";

const UserAccount = ({ className = "" }) => {
  return (
    <section className={`user-account ${className}`}>
      <div className="account-details">
        <div className="account-summary">
          <h2 className="user-account1">User Account</h2>
          <TextField
            className="header4"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#eee",
                borderRadius: "5px",
                fontSize: "18px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="cart-row-1">
            <div className="product">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="title">
                <div className="gift-card-120">Gift Card $120</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
            </div>
            <div className="subscription-header">
              <div className="subscription-header-uptime">$120.00</div>
              <div className="credits">12 Credits</div>
            </div>
            <div className="subscription-header1">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="renewal">
              <div className="renewal-date">
                <div className="next-renewal">Next Renewal</div>
                <div className="april-2024">24 April, 2024</div>
              </div>
              <div className="links">
                <div className="link25">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link26">
                  <img
                    className="icons-block1"
                    loading="lazy"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="details-separator" />
        </div>
        <div className="user-details">
          <div className="checkout-details4">
            <div className="header5">
              <div className="user-details1">User Details</div>
            </div>
            <div className="contact-info-headers">
              <div className="name">Name</div>
              <div className="darnell-roob">Darnell Roob</div>
            </div>
            <div className="contact-info-headers1">
              <div className="email-address">Email Address</div>
              <div className="darnellroobhotmailcom">
                Darnell.Roob@hotmail.com
              </div>
            </div>
            <div className="contact-info-headers2">
              <div className="plan">Plan</div>
              <div className="basic">Basic</div>
            </div>
            <div className="contact-info-headers3">
              <div className="expiry-date">Expiry Date</div>
              <div className="april-20241">24 April, 2024</div>
            </div>
            <div className="contact-info-headers4">
              <div className="auto-renewal">Auto Renewal</div>
              <div className="on">On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UserAccount.propTypes = {
  className: PropTypes.string,
};

export default UserAccount;
