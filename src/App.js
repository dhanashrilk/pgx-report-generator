import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyPDFDocument from "./components/ReportSection";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <PDFViewer width="100%" height="100%">
        <MyPDFDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
