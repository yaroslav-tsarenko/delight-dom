import Page from "../components/Page";
import CartItem from "../components/CartItem";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Page />
      <CartItem />
      <Footer
        privacyHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-9396"
        privacyTarget="_blank"
      />
    </div>
  );
};

export default CartDetailsPage;
