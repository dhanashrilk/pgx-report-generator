import logoImg from "../images/logo.png";
import bgImage from "../images/bgimage.png";

const FirstPage = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col left-side">
          <img src={logoImg} className="main-logo" />
        </div>
        <div className="col first-page">
          <img src={bgImage} className="" />
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div className="col">
            <div className="card-left">
              <div className="d-flex justify-content-center">
                <div className="">
                  <p>
                    <b>PATIENT:</b>
                  </p>
                  <p>
                    <b>PATIENT DOB:</b>
                  </p>
                  <p>
                    <b>ORDERING CLINICIAN:</b>
                  </p>
                  <p>
                    <b>SAMPLE TYPE:</b>
                  </p>
                  <p>
                    <b>ASSAY ORDERED:</b>
                  </p>
                  <p>
                    <b>SAMPLE ID:</b>
                  </p>
                  <p>
                    <b>SAMPLE COLLECTION DATE:</b>
                  </p>
                  <p>
                    <b>REPORT DATE:</b>
                  </p>
                </div>
                <div className="mx-4">
                  <p>-</p>
                  <p>- / - /2016</p>
                  <p>Dr. Swapna Patil</p>
                  <p>Buccal</p>
                  <p>POD Health PGx</p>
                  <p>1325005141</p>
                  <p>24/04/2025</p>
                  <p>27/05/2025 06:10 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-justify right-side">
              <p>
                POD Health, Inc.: Empowering Medication Management with Genetic
                Insights. At POD Health, we are committed to advancing the
                precision of mental health treatment through cutting-edge
                genetic insights. Our PGx Reports are designed to provide
                healthcare professionals with valuable information to enhance
                medication management for individuals with mental health
                conditions and related co-morbidities.
              </p>
              <p>
                Each POD Health PGx Report includes direct contact information
                for scheduling consultations with our expert
                psycho-pharmacologists. These complimentary consultations offer
                personalized support, helping clinicians make informed decisions
                about prescribing medications. Our goal is to optimize treatment
                strategies by leveraging genetic data, ensuring that each
                patient receives the most effective and tailored care possible.
              </p>
              <p>
                The POD Health PGx Report serves as a critical tool in
                understanding genetic factors that can influence medication
                response. By integrating these insights into treatment planning,
                healthcare professionals can improve outcomes and provide more
                individualized care for their patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
