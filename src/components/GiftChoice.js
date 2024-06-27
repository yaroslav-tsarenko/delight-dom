import Link5 from "./Link5";
import Link3 from "./Link3";
import Link6 from "./Link6";
import Link4 from "./Link4";
import PropTypes from "prop-types";
import "./GiftChoice.css";

const GiftChoice = ({ className = "" }) => {
  return (
    <section className={`gift-choice ${className}`}>
      <div className="sorting-parent">
        <div className="sorting">
          <div className="sorting-header">
            <h1 className="heading-24">Give more with Delight Dome</h1>
          </div>
          <div className="sort-by-btton">
            <div className="sort-by">Sort by</div>
            <div className="sort-icon-container">
              <img className="vector-icon8" alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
        <div className="a-favorite-brand">
          A favorite brand or the gift of choice? How about... both!  
        </div>
        <div className="choose-a-gift">
          Choose a gift card, rest assured they can easily swap it for another.
        </div>
        <div className="link-terms">{`Terms & Conditions apply`}</div>
        <div className="gift-card-grid">
          <div className="link43">
            <img
              className="background-icon17"
              loading="lazy"
              alt=""
              src="/background@2x.png"
            />
            <div className="card-containers">
              <div className="card-details1">
                <div className="heading-42">Minions Smart eGift Card</div>
                <div className="heading-52">
                  <div className="special-edition">Special edition</div>
                </div>
              </div>
            </div>
          </div>
          <Link5
            background="/background-1@2x.png"
            backToSchoolSmartEGift="Back to School Smart eGift"
            celebrateBackToSchool="Celebrate Back to School"
          />
          <Link3
            background="/background-2@2x.png"
            congratulationsSmartEGift="Congratulations Smart eGift"
            card="Card"
          />
          <Link6
            background="/background-3@2x.png"
            heading4OhBabySmartEGiftC="Oh Baby! Smart eGift Card"
          />
          <Link3
            background="/background-4@2x.png"
            congratulationsSmartEGift="On The Go Eats Smart eGift"
            card="Card"
            propLeft="1139.2px"
            propTop="40px"
          />
          <Link6
            background="/background-5@2x.png"
            heading4OhBabySmartEGiftC="Teachers Smart eGift Card"
            propLeft="1424px"
            propTop="40px"
          />
          <Link6
            background="/background-6@2x.png"
            heading4OhBabySmartEGiftC="Delight Dome Kids Smart eGift Card"
            propLeft="0px"
            propTop="332px"
          />
          <Link4
            background="/background-7@2x.png"
            heading4KrogerEGiftCard="Kroger eGift Card"
          />
          <Link4
            background="/background-8@2x.png"
            heading4KrogerEGiftCard="Bright Cellars eGift Card"
            propLeft="569.6px"
          />
          <div className="link44">
            <img
              className="background-icon18"
              loading="lazy"
              alt=""
              src="/background-9@2x.png"
            />
            <div className="link-inner2">
              <div className="heading-4-sephora-gift-card-parent">
                <div className="heading-43">Sephora Gift Card</div>
                <div className="heading-53">
                  <a className="top-seller">Top Seller</a>
                </div>
              </div>
            </div>
          </div>
          <Link5
            background="/background-10@2x.png"
            backToSchoolSmartEGift="YorkTest Wellness Card eGift"
            celebrateBackToSchool="New Arrival"
            propTop="332px"
            propLeft="1139.2px"
          />
          <Link3
            background="/background-11@2x.png"
            congratulationsSmartEGift="Academy Sports + Outdoors"
            card="eGift Card"
            propLeft="1424px"
            propTop="332px"
          />
          <Link6
            background="/background-12@2x.png"
            heading4OhBabySmartEGiftC="Aries Season Smart eGift Card"
            propLeft="0px"
            propTop="624px"
          />
          <Link6
            background="/background-13@2x.png"
            heading4OhBabySmartEGiftC="Etsy eGift Card"
            propLeft="284.8px"
            propTop="624px"
          />
          <Link6
            background="/background-14@2x.png"
            heading4OhBabySmartEGiftC="Fandango Gift Card"
            propLeft="569.6px"
            propTop="624px"
          />
          <Link3
            background="/background-15@2x.png"
            congratulationsSmartEGift="Gemini Season Smart eGift"
            card="Card"
            propLeft="854.4px"
            propTop="624px"
          />
          <Link3
            background="/background-16@2x.png"
            congratulationsSmartEGift="Happy Mother's Day Smart"
            card="eGift Card"
            propLeft="1139.2px"
            propTop="624px"
          />
          <Link3
            background="/background-17@2x.png"
            congratulationsSmartEGift={`Health & Wellness Smart eGift`}
            card="Card"
            propLeft="1424px"
            propTop="624px"
          />
          <Link6
            background="/background-18@2x.png"
            heading4OhBabySmartEGiftC="I Choose You Smart eGift Card"
            propLeft="0px"
            propTop="916px"
          />
          <Link6
            background="/background-19@2x.png"
            heading4OhBabySmartEGiftC="Lego eGift Card"
            propLeft="284.8px"
            propTop="916px"
          />
          <Link3
            background="/background-20@2x.png"
            congratulationsSmartEGift="Trolls Band Together Smart"
            card="eGift Card"
            propLeft="569.6px"
            propTop="916px"
          />
          <Link3
            background="/background-21@2x.png"
            congratulationsSmartEGift="On The Go Eats Smart eGift"
            card="Card"
            propLeft="854.4px"
            propTop="916px"
          />
          <Link3
            background="/background-22@2x.png"
            congratulationsSmartEGift="Jurassic World Smart eGift"
            card="Card"
            propLeft="1139.2px"
            propTop="916px"
          />
          <Link6
            background="/background-23@2x.png"
            heading4OhBabySmartEGiftC="Aerie Gift Card"
            propLeft="1424px"
            propTop="916px"
          />
        </div>
      </div>
    </section>
  );
};

GiftChoice.propTypes = {
  className: PropTypes.string,
};

export default GiftChoice;
