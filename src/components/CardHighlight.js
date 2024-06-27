import { Button } from "@mui/material";
import Link1 from "./Link1";
import FeaturedCardSubtitles from "./FeaturedCardSubtitles";
import PropTypes from "prop-types";
import "./CardHighlight.css";

const CardHighlight = ({ className = "" }) => {
  return (
    <section className={`card-highlight ${className}`}>
      <div className="cards-highlight-container">
        <div className="heading-2-most-frequently-ch-parent">
          <h1 className="heading-23">View all gift cards</h1>
          <div className="background13" />
        </div>
        <div className="popular-cards">
          <div className="link6">
            <div className="card-outer-container">
              <img className="image-icon2" alt="" src="/image-2@2x.png" />
              <div className="wrapper-imageshadow4">
                <img
                  className="imageshadow-icon4"
                  loading="lazy"
                  alt=""
                  src="/imageshadow-8@2x.png"
                />
              </div>
            </div>
            <div className="card-outer-container1">
              <a
                className="all-in-1-choice-gift"
                href="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1844"
                target="_blank"
              >
                All-in-1 Choice Gift Card
              </a>
            </div>
            <div className="choice-card-content">
              <div className="the-right-choice-for-everyone-parent">
                <div className="the-right-choice">
                  The right choice for everyone
                </div>
                <div className="choice-card-background-contain">
                  <img
                    className="background-icon6"
                    alt=""
                    src="/background.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="link7">
            <div className="image-parent">
              <img className="image-icon3" alt="" src="/image-3@2x.png" />
              <div className="wrapper-imageshadow5">
                <img
                  className="imageshadow-icon5"
                  loading="lazy"
                  alt=""
                  src="/imageshadow-9@2x.png"
                />
              </div>
            </div>
            <div className="virgin-experience-days-wrapper">
              <div className="virgin-experience-days">
                Virgin Experience Days
              </div>
            </div>
            <div className="link-inner">
              <div className="more-than-4000-experiences-to-parent">
                <div className="more-than-4000">
                  More than 4000 experiences to choose from
                </div>
                <div className="background-frame">
                  <img
                    className="background-icon7"
                    alt=""
                    src="/background.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="link8">
            <div className="background14">
              <div className="wrapper-imageshadow6">
                <img
                  className="imageshadow-icon6"
                  loading="lazy"
                  alt=""
                  src="/imageshadow-10@2x.png"
                />
              </div>
            </div>
            <div className="airbnb-gift-card-parent">
              <div className="airbnb-gift-card">Airbnb Gift Card</div>
              <div className="card-background-container">
                <img
                  className="background-icon8"
                  alt=""
                  src="/background.svg"
                />
              </div>
            </div>
          </div>
          <div className="link9">
            <div className="background-parent1">
              <div className="background15">
                <div className="wrapper-imageshadow7">
                  <img
                    className="imageshadow-icon7"
                    loading="lazy"
                    alt=""
                    src="/imageshadow-11@2x.png"
                  />
                </div>
              </div>
              <div className="primark-gift-card-wrapper">
                <div className="primark-gift-card">Primark Gift Card</div>
              </div>
            </div>
            <img className="background-icon9" alt="" src="/background.svg" />
          </div>
          <Link1
            imageShadow="/imageshadow-12@2x.png"
            beautyFashion="Uber Eats Gift"
            choiceGiftCard="Card"
            propLeft="691px"
            propTop="368px"
          />
          <div className="link10">
            <div className="background-parent2">
              <div className="background16">
                <div className="wrapper-imageshadow8">
                  <img
                    className="imageshadow-icon8"
                    loading="lazy"
                    alt=""
                    src="/imageshadow-13@2x.png"
                  />
                </div>
              </div>
              <div className="adidas-gift-card-wrapper">
                <div className="adidas-gift-card">Adidas Gift Card</div>
              </div>
            </div>
            <img className="background-icon10" alt="" src="/background.svg" />
          </div>
          <div className="link11">
            <div className="background-parent3">
              <div className="background17">
                <div className="wrapper-imageshadow9">
                  <img
                    className="imageshadow-icon9"
                    loading="lazy"
                    alt=""
                    src="/imageshadow-14@2x.png"
                  />
                </div>
              </div>
              <div className="ikea-gift-card-wrapper">
                <div className="ikea-gift-card">IKEA Gift Card</div>
              </div>
            </div>
            <img className="background-icon11" alt="" src="/background.svg" />
          </div>
          <Link1
            imageShadow="/imageshadow-15@2x.png"
            beautyFashion="Ernest Jones Gift"
            choiceGiftCard="Card"
            propLeft="0px"
            propTop="732px"
          />
          <div className="link12">
            <div className="background18">
              <div className="wrapper-imageshadow10">
                <img
                  className="imageshadow-icon10"
                  loading="lazy"
                  alt=""
                  src="/imageshadow-16@2x.png"
                />
              </div>
            </div>
            <FeaturedCardSubtitles
              allIn1ChoiceGiftHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-6201"
              allIn1Choice="The Dining Out"
            />
          </div>
          <Link1
            imageShadow="/imageshadow-2@2x.png"
            beautyFashion="Great British Pub"
            choiceGiftCard="Gift Card"
            propLeft="691px"
            propTop="732px"
          />
          <div className="link13">
            <div className="background-parent4">
              <div className="background19">
                <div className="wrapper-imageshadow11">
                  <img
                    className="imageshadow-icon11"
                    loading="lazy"
                    alt=""
                    src="/imageshadow-18@2x.png"
                  />
                </div>
              </div>
              <div className="costa-gift-card-container">
                <div className="costa-gift-card1">Costa Gift Card</div>
              </div>
            </div>
            <img className="background-icon12" alt="" src="/background.svg" />
          </div>
          <Link1
            imageShadow="/imageshadow-19@2x.png"
            beautyFashion="National Book"
            choiceGiftCard="Tokens Gift Card"
            propLeft="1382px"
            propTop="732px"
          />
        </div>
        <Button
          className="cards-highlight-container-child"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1d1d1d",
            borderRadius: "20px",
            "&:hover": { background: "#1d1d1d" },
            width: 183,
            height: 46,
          }}
        >
          View all gift cards
        </Button>
      </div>
    </section>
  );
};

CardHighlight.propTypes = {
  className: PropTypes.string,
};

export default CardHighlight;
