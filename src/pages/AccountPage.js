import FrameComponent from "../components/FrameComponent";
import UserAccount from "../components/UserAccount";
import Footer from "../components/Footer";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent
        redeemChoiceGiftCHref="https://www.figma.com/design/mO1EeiutpgoR7d3zR6I4ui?node-id=1-1667"
        redeemChoiceGiftCTarget="_blank"
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <UserAccount />
      <Footer />
    </div>
  );
};

export default AccountPage;
