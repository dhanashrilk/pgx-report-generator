import React from "react";
import CardSection from "./cardSection";

const ThirdPage = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <h5 className="head-line text-center">ADDITIONAL INFORMATION</h5>
        <h6 className="headline-green text-center">
          Medication not associated with known Pharmacogenomic interactions
        </h6>
        <CardSection />
      </div>
    </div>
  );
};

export default ThirdPage;
