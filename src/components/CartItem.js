import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import GiftCardContent from "./GiftCardContent";
import PropTypes from "prop-types";
import "./CartItem.css";

const CartItem = ({ className = "" }) => {
  return (
    <section className={`cart-item ${className}`}>
      <div className="card-details">
        <div className="gift-card1">
          <div className="cart-item-details">
            <div className="header">
              <div className="header-child" />
              <div className="item-columns">
                <div className="product">Product</div>
              </div>
              <div className="item-columns1">
                <div className="price">Price</div>
              </div>
              <div className="quantity1">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="item-info">
              <img
                className="image-icon5"
                loading="lazy"
                alt=""
                src="/image1@2x.png"
              />
              <div className="discount">
                <div className="gift-card-1201">Gift Card $120</div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="item-quantity">
                <div className="credits-value">
                  <div className="item-credits">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="quantity-buttons-container">
                  <div className="quantity-buttons-wrapper">
                    <div className="item-quantity-buttons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="button-spacer-two">3</div>
                    <input className="item-quantity-buttons1" type="checkbox" />
                  </div>
                  <FormControl
                    className="hourly-value"
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
                          src="/frame-1000002972.svg"
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
              <div className="item-spacer">$120.00</div>
            </div>
          </div>
          <GiftCardContent />
          <GiftCardContent />
          <div className="cart-actions">
            <div className="action-divider" />
            <div className="cart-buttons">
              <Button
                className="button3"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 132,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button4"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "18",
                  background: "#262626",
                  borderRadius: "4px",
                  "&:hover": { background: "#262626" },
                  width: 143,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header1">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="summary-values">
            <div className="total-labels">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="summary-spacer">$360.00</div>
            </div>
          </div>
          <div className="shipping-details">
            <div className="shipping-taxes">
              <div className="shipping-tax-labels">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="shipping-tax-labels1">
                <div className="div1">$0.00</div>
                <div className="div2">$0.00</div>
              </div>
            </div>
          </div>
          <div className="summary-divider">
            <div className="summary-divider-child" />
          </div>
          <div className="summary-values1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div3">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  className: PropTypes.string,
};

export default CartItem;
