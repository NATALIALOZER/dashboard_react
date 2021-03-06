import React from "react";
import CustomerReview from "../../../parts/CustomerReview/CustomerReview";
import Updates from "../../../parts/Updates/Updates";
import "./RightAside.css";

const RightAside = () => {
  return (
    <div className="RightAside">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightAside;
