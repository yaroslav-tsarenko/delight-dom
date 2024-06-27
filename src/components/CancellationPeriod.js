import PropTypes from "prop-types";
import "./CancellationPeriod.css";

const CancellationPeriod = ({ className = "" }) => {
  return (
    <div className={`cancellation-period ${className}`}>
      <h1 className="cancellation-period1">
        <ol className="cancellation-period2">
          <li>Cancellation Period</li>
        </ol>
      </h1>
      <div className="time-period">
        <div className="time-period-parent">
          <div className="time-period1">1.1 Time Period</div>
          <div className="you-may-cancel">
            You may cancel your booking or subscription within [10] days of
            purchase or before the start of the service, whichever comes first,
            to receive a full refund.
          </div>
        </div>
        <div className="beyond-time-period-parent">
          <div className="beyond-time-period">1.2 Beyond time period</div>
          <div className="cancellations-made-after1">
            Cancellations made after the specified period may be subject to
            partial or no refund, as outlined below.
          </div>
        </div>
      </div>
    </div>
  );
};

CancellationPeriod.propTypes = {
  className: PropTypes.string,
};

export default CancellationPeriod;
