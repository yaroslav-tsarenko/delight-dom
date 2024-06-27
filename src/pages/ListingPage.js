import Component from "../components/Component";
import GiftSelection from "../components/GiftSelection";
import GiftChoice from "../components/GiftChoice";
import Footer from "../components/Footer";
import "./ListingPage.css";

const ListingPage = () => {
  return (
    <div className="listingpage">
      <Component />
      <section className="hero-banner">
        <div className="banner-content">
          <div className="one-gift-multiple-options-en-parent">
            <h1 className="one-gift-multiple-container">
              <p className="one-gift-multiple">One gift, multiple options,</p>
              <p className="endless-joy">endless joy.</p>
            </h1>
            <div className="with-100s-of-container">
              <p className="with-100s-of">
                With 100s of brands to choose from and the freedom to spend it
              </p>
              <p className="their-way-this">{`their way, this Swap & Shop card is our giftees’ fav!`}</p>
            </div>
          </div>
        </div>
        <img
          className="us-woc20banner20image-20des-icon"
          loading="lazy"
          alt=""
          src="/us-woc20banner20image-20desktoppng@2x.png"
        />
      </section>
      <GiftSelection />
      <GiftChoice />
      <Footer
        privacyHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-9396"
        privacyTarget="_blank"
      />
    </div>
  );
};

export default ListingPage;
