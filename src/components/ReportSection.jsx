// import React from "react";

// import {
//   Document,
//   Image,
//   Page,
//   StyleSheet,
//   Text,
//   View,
// } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 10,
//   },

//

// });

// const ReportDocument = () => (
//   <Document>
//     <Page size="A4" style={{ padding: 10, flexDirection: "column" }} wrap>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image src={headerLogo} style={styles.headerImage} />
//         <Text style={styles.headerText}>
//           Test Results for "Patient's Name" Page 1 of 5
//         </Text>
//       </View>

//

//       {/* Footer */}
//       <View style={styles.footer} fixed>
//         <Text style={styles.footerText}>
//           Disclaimer: This report is intended to supplement a comprehensive
//           patient assessment, including but not limited to diagnosis, clinical
//           history, and evaluation of co-morbid conditions. It should not be used
//           as the sole basis for prescribing decisions. For the most current
//           information on gene-drug associations, please refer to resources such
//           as CPIC, FDA Table of Pharmacogenetic Associations. Please note that
//           pharmacokinetics and pharmacodynamics may evolve over time, and this
//           report may not reflect the latest findings. Prescribers should also
//           consider approved drug labeling, clinical practice guidelines, and
//           other relevant factors such as family history when making treatment
//           decisions.
//         </Text>
//         <Image src={footerLogo} style={styles.footerImage} />
//       </View>
//     </Page>
//   </Document>
// );

// export default ReportDocument;

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
import footerLogo from "../images/footer-logo.png";

// Styles
const styles = StyleSheet.create({
  // page: {
  //   paddingTop: 40,
  //   paddingBottom: 40,
  //   paddingHorizontal: 35,
  // },
  header: {
    borderBottom: "1 solid #ccc",
    paddingBottom: 5,

    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "10px",
    marginRight: "20px",
  },
  headerText: {
    fontSize: 10,
    textAlign: "right",
    flexGrow: 1,
    marginLeft: "120px",
    marginTop: "10px",
  },
  headerImage: {
    height: "20px",
    width: "auto",
  },
  footer: {
    borderTop: "1px solid #ccc",
    padding: "20px",
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    width: "100%",
    padding: "20px",
    paddingTop: "20px",
  },
  footerImage: {
    height: 20,
    width: "auto",
  },
  content: {
    marginTop: 60,
    marginBottom: 40,
    fontSize: 12,
  },
  body: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

const MyPDFDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <View style={styles.header}>
          <Image src={headerLogo} style={styles.headerImage} />

          <Text style={styles.headerText}>
            Test Results for Patient's Name Page 1 of 5
          </Text>
        </View> */}

        <View style={styles.body}>
          <FirstPage />
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
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
          </Text>
          <Image src={footerLogo} style={styles.footerImage} />
        </View>
      </Page>
    </Document>
  );
};

export default MyPDFDocument;
