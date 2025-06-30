import logoImg from "../images/logo.png";
import bgImage from "../images/bgimage.png";

const FirstPage = () => {
  return (
    <div className="pdf-container">
      <div className="pdf-row">
        <div className="pdf-col left-side">
          <img src={logoImg} className="main-logo" alt="Logo" />
        </div>
        <div className="pdf-col right-side centered">
          <img src={bgImage} className="bg-image" alt="Background" />
        </div>
      </div>

      <div className="pdf-row patient-info-section">
        <div className="pdf-col card-left">
          <div className="patient-info">
            <div className="labels">
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
            <div className="values">
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

        <div className="pdf-col card-right">
          <div className="text-justify">
            <p>
              POD Health, Inc.: Empowering Medication Management with Genetic
              Insights. At POD Health, we are committed to advancing the
              precision of mental health treatment through cutting-edge genetic
              insights. Our PGx Reports are designed to provide healthcare
              professionals with valuable information to enhance medication
              management for individuals with mental health conditions and
              related co-morbidities.
            </p>
            <p>
              Each POD Health PGx Report includes direct contact information for
              scheduling consultations with our expert psycho-pharmacologists.
              These complimentary consultations offer personalized support,
              helping clinicians make informed decisions about prescribing
              medications. Our goal is to optimize treatment strategies by
              leveraging genetic data, ensuring that each patient receives the
              most effective and tailored care possible.
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

      <div className="pdf-row input-section">
        <div className="signature-section">
          <div className="form-column">
            <div className="form-line">
              <label>Electronically Signed By</label>
              <div className="line"></div>
            </div>
            <div className="form-line">
              <label>Literature Information Reviewed By</label>
              <div className="line"></div>
            </div>
            <div className="form-line">
              <label>Comment</label>
              <div className="line"></div>
            </div>
          </div>
          <div className="form-column">
            <div className="form-line">
              <label>Contact Information</label>
              <div className="line"></div>
            </div>
            <div className="form-line">
              <label>Phone number</label>
              <div className="line"></div>
            </div>
            <div className="form-line">
              <label>Email</label>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
