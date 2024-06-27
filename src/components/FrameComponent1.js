import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`refund-process-parent ${className}`}>
      <h1 className="refund-process">
        <ol className="refund-process1">
          <li>Refund Process</li>
        </ol>
      </h1>
      <div className="refund-process-steps-list-parent">
        <div className="refund-process-steps-list">
          <div className="to-request-a">
            2.1 To request a refund, please contact our customer support team
            within [X] days of the purchase date or before the start of the
            service, whichever comes first.
          </div>
        </div>
        <div className="refund-process-steps-list1">
          <div className="provide-your-order">
            2.2 Provide your order details, reason for the refund request, and
            any relevant information or documentation to support your claim.
          </div>
        </div>
        <div className="refund-process-steps-list2">
          <div className="our-customer-support">
            2.3 Our customer support team will review your request and notify
            you of the approval or rejection of your refund. If approved, your
            refund will be processed via the original method of payment within
            [Y] business days from the date of approval.
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
