import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Footer = () => (
  <footer className="card-footer">
    <div className="footer-card ">
      <div className="border-bottom border-light-subtle d-flex justify-content-between py-3">
        {" "}
        <div className="d-flex flex-column ">
          <p className="py-0 mb-0"> Drug Risk assessment annotations</p>
          <p className="py-0 mb-0">
            <span className={`interaction-badge improved mx-2`}>
              <FiThumbsUp />
            </span>
            Improved Clinical outcome
          </p>
        </div>
        <div>
          <p>
            <span className={`interaction-badge moderate mx-2`}>
              <FiThumbsUp />
            </span>
            Moderate interaction
          </p>
        </div>
        <div>
          <p>
            <span className={`interaction-badge significant mx-2`}>
              <FiThumbsDown />
            </span>
            Moderate interaction
          </p>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-8 d-flex flex-column">
          <p className="py-0 mb-0">
            Pharmacokinetic & Pharmacodynamic genes annotations
          </p>
          <p className="py-0 mb-0">
            <span className="pgx-type text-center px-2">PK</span>
            <span className="pgx-type text-center px-2 mx-2">PD</span>
          </p>
        </div>
        <div className="col-4 d-flex flex-column justify-content-start">
          <p> *: FDA</p>
          <p className="" style={{ color: "#f59524" }}>
            *: CPIC
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
