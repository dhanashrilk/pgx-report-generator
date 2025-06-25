import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import PDFExportButton from "./components/ReportSection";
import PrintLogic from "./components/PrintLogic";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <PDFExportButton />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
