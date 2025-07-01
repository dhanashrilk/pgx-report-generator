import React, { useRef, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "../index.css";
import FirstPage from "./firstPage";
import headerLogo from "./../images/horizontal-logo.png";
import footerLogo from "./../images/footer-logo.png";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import FifthPage from "./fifthPage";

export default function ReportPage() {
  const headerRef = useRef();
  return (
    <div className="print-container">
      <header className="print-header" ref={headerRef}>
        <div>
          <img src={headerLogo} className="header-logo" />
        </div>
        <div>
          <p>Test Results for "Patient's Name" Page 1 of 5</p>
        </div>
      </header>

      <main className="print-body">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
      </main>

      <footer className="print-footer">
        <div className="footer-content">
          <p className="footer-disc">
            Disclaimer: This report is intended to supplement a comprehensive
            patient assessment, including but not limited to diagnosis, clinical
            history, and evaluation of co-morbid conditions. It should not be
            used as the sole basis for prescribing decisions. For the most
            current information on gene-drug associations, please refer to
            resources such as CPIC, FDA Table of Pharmacogenetic Associations.
            Please note that pharmacokinetics and pharmacodynamics may evolve
            over time, and this report may not reflect the latest findings.
            Prescribers should also consider approved drug labeling, clinical
            practice guidelines, and other relevant factors such as family
            history when making treatment decisions.
          </p>

          <img src={footerLogo} className="footer-logo" alt="Footer Logo" />
        </div>
      </footer>
    </div>
  );
}
