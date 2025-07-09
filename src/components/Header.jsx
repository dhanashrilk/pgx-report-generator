import React from "react";
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import headerLogo from "../images/horizontal-logo.png"; // adjust path as needed

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 10,
    textAlign: "right",
  },
  headerImage: {
    height: 20,
    width: 100, // or a fixed width to help layout
    objectFit: "contain",
  },
});

const CustomHeader = ({ patientName = "Patient's Name" }) => (
  <View style={styles.header} fixed>
    <View>
      <Image src={headerLogo} style={styles.headerImage} />
    </View>
    <View>
      <Text
        style={styles.headerText}
        render={({ pageNumber, totalPages }) =>
          `Test Results for ${patientName} – Page ${pageNumber} of ${totalPages}`
        }
      />
    </View>
  </View>
);

export default CustomHeader;
