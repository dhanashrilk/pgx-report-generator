import React from "react";
import DrugTable from "./DrugTable";
import MethylphenidateTable from "./MethylphenidateTable";
import RisperidoneTable from "./RisperidoneTable";
import Footer from "./Footer";

const SecondPage = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <h5 className="head-line text-center">GENE DRUG INTERACTION</h5>
        <h6 className="headline-green text-center">
          Drug Synopsis with risk assessment
        </h6>
        <h6 className="headline-gray text-center">ANTIEPILEPTICS</h6>
        <DrugTable />
        <h6 className="headline-gray text-center"> PSYCHOSTIMULANTS</h6>
        <MethylphenidateTable />
        <h6 className="headline-gray text-center"> ANTIPSYCHOTICS</h6>
        <RisperidoneTable />
        <Footer />
      </div>
    </div>
  );
};

export default SecondPage;
