import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", privacyHref, privacyTarget }) => {
  return (
    <section className={`footer ${className}`}>
      <footer className="section">
        <div className="container1">
          <div className="footer-navigation">
            <div className="business-gift-ideas">
              <div className="gift-ideas">Gift ideas</div>
              <div className="business-links">
                <div className="link18">
                  <a
                    className="all-gift-cards"
                    href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-3559"
                    target="_blank"
                  >
                    All gift cards
                  </a>
                </div>
                <div className="link19">
                  <a
                    className="choice-gift-card2"
                    href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1844"
                    target="_blank"
                  >
                    Choice Gift Card
                  </a>
                </div>
                <div className="link20">
                  <a
                    className="blogs"
                    href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-7484"
                    target="_blank"
                  >
                    Blogs
                  </a>
                </div>
              </div>
            </div>
            <div className="business-gift-ideas1">
              <a className="business2">Business</a>
              <div className="link-parent">
                <div className="link21">
                  <a
                    className="business-possibilities"
                    href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-2461"
                    target="_blank"
                  >
                    Business possibilities
                  </a>
                </div>
                <div className="link22">
                  <div className="quote-within-one">Quote within one hour</div>
                </div>
                <div className="link23">
                  <a
                    className="personalised-gifts"
                    href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-5028"
                    target="_blank"
                  >
                    Personalised gifts
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-service-parent">
            <div className="customer-service1">Customer service</div>
            <div className="customer-service-links">
              <div className="link24">
                <a
                  className="contact-us2"
                  href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-7865"
                  target="_blank"
                >
                  Contact us
                </a>
              </div>
              <div className="link25">
                <div className="order-gift-card">Order gift card</div>
              </div>
              <div className="link26">
                <a
                  className="redeem-choice-gift1"
                  href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1667"
                  target="_blank"
                >
                  Redeem Choice Gift Card
                </a>
              </div>
              <div className="link27">
                <div className="shipping-and-delivery">
                  Shipping and delivery
                </div>
              </div>
              <div className="link28">
                <div className="frequently-asked-questions">
                  Frequently Asked Questions
                </div>
              </div>
              <div className="link29">
                <div className="order-in-the">Order in the Netherlands</div>
              </div>
              <div className="link30">
                <div className="order-in-belgium">Order in Belgium</div>
              </div>
            </div>
          </div>
          <div className="most-popular-gift-cards-parent">
            <div className="most-popular-gift">Most popular gift cards</div>
            <div className="popular-links">
              <div className="link31">
                <a
                  className="all-in-1-choice-gift1"
                  href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1844"
                  target="_blank"
                >
                  All-in-1 Choice Gift Card
                </a>
              </div>
              <div className="link32">
                <div className="restaurant-gift-card">Restaurant Gift Card</div>
              </div>
              <div className="link33">
                <div className="beauty-fashion1">{`Beauty & Fashion Choice Gift Card`}</div>
              </div>
              <div className="link34">
                <div className="national-garden-gift">
                  National Garden Gift Card
                </div>
              </div>
              <div className="link35">
                <a
                  className="inspire-travelcard-gift"
                  href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-8250"
                  target="_blank"
                >
                  Inspire TravelCard Gift Card
                </a>
              </div>
              <div className="link36">
                <div className="costa-gift-card2">Costa Gift Card</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="section1">
        <div className="section2">
          <img
            className="logo-icon1"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
          <div className="link37">
            <a
              className="terms-and-conditions"
              href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-8879"
              target="_blank"
            >
              Terms and conditions
            </a>
          </div>
          <div className="link38">
            <a className="privacy" href={privacyHref} target={privacyTarget}>
              Privacy
            </a>
          </div>
        </div>
        <div className="section-copyright-2024-gif-wrapper">
          <div className="section3">© Copyright 2024 DelightDome</div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  privacyHref: PropTypes.string.isRequired,
  privacyTarget: PropTypes.string,
};

export default Footer;
