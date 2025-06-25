import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import "../index.css";
import FirstPage from "./firstPage";
import headerLogo from "./../images/horizontal-logo.png";
import footerLogo from "./../images/footer-logo.png";

// const drugData = [
//   {
//     drug: "Methylphenidate",
//     gene: "TRIB3 (RS2295490)",
//     genotype: "A>G (GG)",
//     impact: "Improved Clinical Outcome",
//     details:
//       "GG genotype is associated with better efficacy in ADHD treatment.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
//   {
//     drug: "Carbamazepine",
//     gene: "CYP2C9 (RS9332120)",
//     genotype: "T>C (TC)",
//     impact: "Significant Interaction",
//     details:
//       "Intermediate chance of poor response in difficult-to-treat epilepsy.",
//   },
// ];

export default function ReportPage() {
  //   const handlePrint = () => window.print();

  return (
    <div className="print-container">
      <header className="print-header d-flex justify-content-between">
        <div>
          <img src={headerLogo} className="header-logo" />
        </div>
        <div>
          <p>Test Results for "Patient's Name" Page 1 of 5</p>
        </div>
      </header>

      <main className="print-body">
        {/* {drugData.map((item, index) => (
          <Card key={index} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.drug}</Typography>
              <Typography variant="body2">
                <b>Gene:</b> {item.gene}
              </Typography>
              <Typography variant="body2">
                <b>Genotype:</b> {item.genotype}
              </Typography>
              <Typography variant="body2">
                <b>Clinical Impact:</b> {item.impact}
              </Typography>
              <Typography variant="body2">{item.details}</Typography>
            </CardContent>
          </Card>
        ))} */}
        <FirstPage />
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

      {/* <div className="no-print">
        <Button variant="contained" onClick={handlePrint}>
          Print Report
        </Button>
      </div> */}
    </div>
  );
}
