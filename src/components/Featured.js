import { Button } from "@mui/material";
import FeaturedCardSubtitles from "./FeaturedCardSubtitles";
import Link1 from "./Link1";
import PropTypes from "prop-types";
import "./Featured.css";

const Featured = ({ className = "" }) => {
  return (
    <section className={`featured ${className}`}>
      <div className="featured-container">
        <div className="background5" />
        <div className="featured-content">
          <div className="heading-2">Most frequently chosen gift cards</div>
          <div className="featured-cards">
            <div className="featured-card-links">
              <div className="link1">
                <div className="background6">
                  <img
                    className="image-icon"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <FeaturedCardSubtitles
                  allIn1ChoiceGiftHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1844"
                  allIn1Choice="All-in-1 Choice"
                />
              </div>
              <div className="link2">
                <div className="background-parent">
                  <div className="background7">
                    <div className="wrapper-imageshadow1">
                      <img
                        className="imageshadow-icon1"
                        loading="lazy"
                        alt=""
                        src="/imageshadow@2x.png"
                      />
                    </div>
                  </div>
                  <div className="featured-card-titles">
                    <a
                      className="hotel-gift-card"
                      href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-4442"
                      target="_blank"
                    >
                      Hotel Gift Card
                    </a>
                  </div>
                </div>
                <img
                  className="background-icon2"
                  alt=""
                  src="/background.svg"
                />
              </div>
              <Link1
                imageShadow="/imageshadow-1@2x.png"
                beautyFashion={`Beauty & Fashion`}
                choiceGiftCard="Choice Gift Card"
              />
              <div className="link3">
                <div className="background8">
                  <img
                    className="image-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>
                <div className="restaurant-gift-card-parent">
                  <div className="restaurant-gift-card-container">
                    <p className="restaurant-gift">Restaurant Gift</p>
                    <p className="card">Card</p>
                  </div>
                  <div className="background-container">
                    <img
                      className="background-icon3"
                      alt=""
                      src="/background.svg"
                    />
                  </div>
                </div>
              </div>
              <Link1
                imageShadow="/imageshadow-2@2x.png"
                beautyFashion="Great British Pub"
                choiceGiftCard="Gift Card"
                propLeft="1382px"
                propTop="24px"
              />
              <Link1
                imageShadow="/imageshadow-3@2x.png"
                beautyFashion="John Lewis Gift"
                choiceGiftCard="Card"
                propLeft="0px"
                propTop="388px"
              />
              <Link1
                imageShadow="/imageshadow-4@2x.png"
                beautyFashion="Great British Pub"
                choiceGiftCard="Gift Card"
                propLeft="345.5px"
                propTop="388px"
              />
              <div className="link4">
                <div className="background-group">
                  <div className="background9">
                    <div className="wrapper-imageshadow2">
                      <img
                        className="imageshadow-icon2"
                        loading="lazy"
                        alt=""
                        src="/imageshadow-3@2x.png"
                      />
                    </div>
                  </div>
                  <div className="costa-gift-card-wrapper">
                    <div className="costa-gift-card">Costa Gift Card</div>
                  </div>
                </div>
                <img
                  className="background-icon4"
                  alt=""
                  src="/background.svg"
                />
              </div>
              <Link1
                imageShadow="/imageshadow-6@2x.png"
                beautyFashion="Virgin Experience"
                choiceGiftCard="Days Gift Card"
                propLeft="1036.5px"
                propTop="388px"
              />
              <div className="link5">
                <div className="frame-div">
                  <div className="background10">
                    <div className="wrapper-imageshadow3">
                      <img
                        className="imageshadow-icon3"
                        alt=""
                        src="/imageshadow-7@2x.png"
                      />
                    </div>
                  </div>
                  <div className="hotel-gift-card-wrapper">
                    <a
                      className="hotel-gift-card1"
                      href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-4442"
                      target="_blank"
                    >
                      Hotel Gift Card
                    </a>
                  </div>
                </div>
                <img
                  className="background-icon5"
                  alt=""
                  src="/background.svg"
                />
              </div>
            </div>
            <Button
              className="featured-view-all"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "17.6",
                background: "#1d1d1d",
                borderRadius: "20px",
                "&:hover": { background: "#1d1d1d" },
                width: 200,
                height: 46,
              }}
            >
              View all gift cards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
