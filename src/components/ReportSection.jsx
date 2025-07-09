import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import headerLogo from "../images/horizontal-logo.png";
import FirstPage from "./firstPage";
import SecondPage from "./secondPage";
import ThirdPage from "./thirdPage";
import FourthPage from "./fourthPage";
import FifthPage from "./fifthPage";
import Footer from "./Footer";
import CustomHeader from "./Header";
import SecondHeader from "./secondHeader";
import DrugTable from "./DrugTable";
import MethylphenidateTablePDF from "./MethylphenidateTable";
import RisperidoneTablePDF from "./RisperidoneTable";
import SecondFooter from "./secondFooter";

// Styles
const styles = StyleSheet.create({
  // page: {
  //   paddingTop: 40,
  //   paddingBottom: 40,
  //   paddingHorizontal: 35,
  // },

  content: {
    marginTop: 60,
    marginBottom: 40,
    fontSize: 12,
  },
  body: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 10,
    marginTop: 2,
    width: "100%",
  },
  section: {
    marginBottom: 10,
    paddingBottom: 10,
  },

  titleGray: {
    backgroundColor: "#DAE5EA",
    color: "#5A676E",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,

    textAlign: "center",
    fontWeight: 500,
    minHeight: 30,
    paddingTop: 8,
    fontWeight: 600,
    borderBottomRightRadius: 12,
  },
  footerWrapper: {
    paddingTop: 40,
  },
});

const MyPDFDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          <FirstPage />
        </View>
        <Footer />
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.headerWrapper} fixed>
          <SecondHeader />
        </View>
        <View style={styles.body} wrap>
          <SecondPage />
        </View>
        {/* Fixed Footer - shows on every physical page */}
        <View style={styles.footerWrapper} fixed>
          <SecondFooter />
        </View>
      </Page>
    </Document>
  );
};

export default MyPDFDocument;
