import { Button } from "@mui/material";
import Component from "../components/Component";
import AllinChoiceFeatures from "../components/AllinChoiceFeatures";
import Footer from "../components/Footer";
import "./ProductDescriptionpage.css";

const ProductDescriptionpage = () => {
  return (
    <div className="productdescriptionpage">
      <Component />
      <main className="hero">
        <div className="background">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
        </div>
        <div className="content">
          <div className="background1" />
          <div className="heading">
            <h1 className="heading-1">All-in-1 Choice Gift Card</h1>
            <div className="gift-card-content">
              <div className="gift-card-content-inner">
                <AllinChoiceFeatures
                  allinChoiceFeatureIconIte="/vector.svg"
                  vector="/vector.svg"
                  vector1="/vector.svg"
                  vector2="/vector.svg"
                  vector3="/vector.svg"
                  propAlignSelf="unset"
                  propGap="10px"
                />
              </div>
              <div className="value">
                <div className="choose-your-value">Choose your value</div>
                <div className="value-buttons">
                  <Button
                    className="label"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#262626 solid 2px",
                      borderRadius: "40px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £25.00
                  </Button>
                  <Button
                    className="label1"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#c5c4c8 solid 2px",
                      borderRadius: "40px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £50.00
                  </Button>
                  <Button
                    className="label2"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#c5c4c8 solid 2px",
                      borderRadius: "40px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £100.00
                  </Button>
                  <Button
                    className="label3"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#0f0a1b",
                      fontSize: "16",
                      background: "#fff",
                      border: "#c5c4c8 solid 2px",
                      borderRadius: "40px",
                      "&:hover": { background: "#fff" },
                      width: 139.8,
                      height: 68,
                    }}
                  >
                    £500.00
                  </Button>
                  <div className="label4">
                    <div className="other">Other</div>
                  </div>
                </div>
              </div>
              <div className="delivery">
                <div className="delivery-method">Delivery method</div>
                <div className="delivery-options">
                  <div className="label5">
                    <div className="delivery-details">
                      <div className="by-mail">By mail</div>
                    </div>
                    <div className="sent-via-royal">Sent via Royal Mail UK</div>
                  </div>
                  <div className="label6">
                    <div className="digital-wrapper">
                      <div className="digital">Digital</div>
                    </div>
                    <div className="free-and-sustainable">
                      Free and sustainable
                    </div>
                  </div>
                </div>
              </div>
              <div className="packaging">
                <div className="packaging-options">
                  <div className="what-kind-of">
                    What kind of packaging would you like?
                  </div>
                  <div className="choose-from-1">Choose from 1 options</div>
                </div>
                <div className="overlaybordershadow">
                  <div className="background2">
                    <img
                      className="surprise-paars-gc-uk-envelop-1-icon"
                      loading="lazy"
                      alt=""
                      src="/surprisepaarsgcukenvelop160x107x31-0png@2x.png"
                    />
                  </div>
                  <div className="envelope-info">
                    <div className="envelope-details">
                      <div className="envelope-name">
                        <div className="surprise-gift-envelope">
                          Surprise Gift Envelope
                        </div>
                        <div className="free">Free</div>
                      </div>
                      <Button
                        className="button"
                        disableElevation
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#262626",
                          fontSize: "16",
                          background: "#fff",
                          border: "#262626 solid 2px",
                          borderRadius: "40px",
                          "&:hover": { background: "#fff" },
                          width: 100.5,
                        }}
                      >
                        Change
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="costs">
                <div className="costs1">Costs</div>
                <div className="div">£25.00</div>
              </div>
              <div className="actions">
                <div className="quantity">
                  <div className="button1">
                    <img className="svg-icon" alt="" src="/svg-2.svg" />
                  </div>
                  <div className="input">
                    <div className="placeholder">1</div>
                  </div>
                  <img
                    className="button-icon"
                    loading="lazy"
                    alt=""
                    src="/button.svg"
                  />
                </div>
                <Button
                  className="button2"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "17.4",
                    background: "#1d1d1d",
                    borderRadius: "40px",
                    "&:hover": { background: "#1d1d1d" },
                    height: 64,
                  }}
                >
                  Add to basket
                </Button>
              </div>
              <div className="promotion">
                <div className="background3">
                  <img
                    className="promotion-block-pounds007050b-icon"
                    loading="lazy"
                    alt=""
                    src="/promotion-block-pounds007050b4webp@2x.png"
                  />
                  <div className="with-every-physical-container">
                    <span className="with-every-physical-container1">
                      <p className="with-every-physical">
                        With every physical gift card a free* Hotelgiftcard
                      </p>
                      <p className="voucher-worth-15">
                        voucher worth £15! *while stocks last
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="gift-finding">
                <div className="finding-the-right-container">
                  <p className="finding-the-right">
                    Finding the right gift can be hard work, but not with the
                    All-in-1 Choice Gift
                  </p>
                  <p className="card-add-multiple">
                    Card. Add multiple different gift cards from top brands onto
                    this all in one gift
                  </p>
                  <p className="card-for-an">
                    card, for an array of shopping choices. The recipient of the
                    all in one card just
                  </p>
                  <p className="needs-to-redeem">
                    needs to redeem the Choice Gift Card with one or more gift
                    cards of their choice
                  </p>
                  <p className="from-our-extensive">
                    from our extensive assortment at VariedValue. This means the
                    gift card you
                  </p>
                  <p className="give-them-is">
                    give them is a guaranteed success!
                  </p>
                </div>
              </div>
              <div className="gift-card-use">
                <div className="the-all-in-1-choice-container">
                  <span>
                    <p className="the-all-in-1-choice">
                      The All-in-1 Choice Gift Card also makes for an excellent
                      work gift. Add your
                    </p>
                    <p className="businesss-logo-and">
                      business’s logo and name to the all in one gift card, and
                      load it up with other gift
                    </p>
                    <p className="cards-from-the">
                      cards from the extensive options here. Contact us directly
                      for a no-obligation quote.
                    </p>
                  </span>
                </div>
              </div>
              <div className="this-card-is-container">
                <span className="this-card-is-container1">
                  <p className="this-card-is">
                    This card is valid for one year from the date of purchase,
                    which changes when
                  </p>
                  <p className="the-recipient-redeems">
                    the recipient redeems it with another card, to the validity
                    period of that card. FInd out which giftcards you can use
                    with the all in one choice gift card here.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer
        privacyHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-9396"
        privacyTarget="_blank"
      />
    </div>
  );
};

export default ProductDescriptionpage;
