import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Footer = () => (
  <footer className="card-footer">
    <div className="footer-card">
      <div className="footer-top">
        <div className="footer-col">
          <p className="py-0 mb-0">Drug Risk assessment annotations</p>
          <p className="py-0 mb-0">
            <span className={`interaction-badge improved mx-2`}>
              <FiThumbsUp />
            </span>
            Improved Clinical outcome
          </p>
        </div>
        <div className="footer-col">
          <p>
            <span className={`interaction-badge moderate mx-2`}>
              <FiThumbsUp />
            </span>
            Moderate interaction
          </p>
        </div>
        <div className="footer-col">
          <p>
            <span className={`interaction-badge significant mx-2`}>
              <FiThumbsDown />
            </span>
            Moderate interaction
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <p className="py-0 mb-0">
            Pharmacokinetic & Pharmacodynamic genes annotations
          </p>
          <p className="py-0 mb-0">
            <span className="pgx-type text-center px-2">PK</span>
            <span className="pgx-type text-center px-2 mx-2">PD</span>
          </p>
        </div>
        <div className="footer-right">
          <p>*: FDA</p>
          <p className="" style={{ color: "#f59524" }}>
            *: CPIC
          </p>
        </div>
      </div>

      <p className="note-desc">
        Pharmacogenomic (PGx) response outlined in this report is derived from
        peer-reviewed research and the patient’s specific genotype, enabling an
        assessment of the patient’s likelihood of experiencing strong or reduced
        efficacy, as well as high or low risk involvement with the treatment.
      </p>
    </div>
  </footer>
);

export default Footer;
