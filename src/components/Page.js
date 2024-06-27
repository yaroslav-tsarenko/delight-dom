import Component from "./Component";
import PropTypes from "prop-types";
import "./Page.css";

const Page = ({ className = "" }) => {
  return (
    <section className={`page ${className}`}>
      <Component />
      <div className="cart-header-wrapper">
        <div className="cart-header">
          <div className="cart-title">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

Page.propTypes = {
  className: PropTypes.string,
};

export default Page;
