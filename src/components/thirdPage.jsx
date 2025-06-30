import CardSection from "./cardSection";

const ThirdPage = () => {
  return (
    <div className="custom-container padding-y-4">
      <div className="custom-row">
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
