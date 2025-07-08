import React from "react";
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import logoImg from "../images/logo.png";
import bgImage from "../images/bgimage.png";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontSize: 12,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },

  col: {
    flex: 1,
    padding: 10,
  },
  centered: {
    alignItems: "center",
  },
  mainLogo: {
    width: "100%",
    height: 80,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },

  paragraph: {
    fontSize: 10,
    marginBottom: 5,
    lineHeight: 1.4,
  },
  formLine: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    padding: "10px 0",
  },
  label: {
    fontSize: 10,
    width: 100, // Adjust this value to align labels properly
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#000",
    flex: 1,
    height: 0.5,
    marginLeft: 6,
    width: "100%",
  },

  patientInfoRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 4,
    padding: "1px",
  },
  patientInfo: {
    padding: "20px",
    backgroundColor: "#dcefef",
    borderTopRightRadius: "30px",
    borderBottomLeftRadius: "30px",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});

const FirstPage = () => (
  <View style={styles.container}>
    {/* Top Row with Logos */}
    <View style={styles.row}>
      <View style={[styles.col, styles.centered]}>
        <Image src={logoImg} style={styles.mainLogo} />
      </View>
      <View style={[styles.col, styles.centered]}>
        <Image src={bgImage} style={styles.bgImage} />
      </View>
    </View>

    {/* Patient Info */}

    <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.patientInfo}>
          {[
            ["PATIENT:", "-"],
            ["PATIENT DOB:", "- / - / 2016"],
            ["ORDERING CLINICIAN:", "Dr. Swapna Patil"],
            ["SAMPLE TYPE:", "Buccal"],
            ["ASSAY ORDERED:", "POD Health PGx"],
            ["SAMPLE ID:", "1325005141"],
            ["SAMPLE COLLECTION DATE:", "24/04/2025"],
            ["REPORT DATE:", "27/05/2025 06:10 PM"],
          ].map(([label, value], idx) => (
            <View key={idx} style={styles.patientInfoRow}>
              <Text style={styles.label}>{label}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Company Description */}
      <View style={styles.col}>
        <Text style={styles.paragraph}>
          POD Health, Inc.: Empowering Medication Management with Genetic
          Insights. At POD Health, we are committed to advancing the precision
          of mental health treatment through cutting-edge genetic insights.
        </Text>
        <Text style={styles.paragraph}>
          Each POD Health PGx Report includes direct contact information for
          scheduling consultations with our expert psycho-pharmacologists. These
          complimentary consultations offer personalized support, helping
          clinicians make informed decisions.
        </Text>
        <Text style={styles.paragraph}>
          The POD Health PGx Report serves as a critical tool in understanding
          genetic factors that can influence medication response. By integrating
          these insights into treatment planning, healthcare professionals can
          provide more individualized care.
        </Text>
      </View>
    </View>

    {/* Input Section */}
    <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.formLine}>
          <Text style={styles.label}>Electronically Signed By</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.formLine}>
          <Text style={styles.label}>Literature Information Reviewed By</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.formLine}>
          <Text style={styles.label}>Comment</Text>
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.col}>
        <View style={styles.formLine}>
          <Text style={styles.label}>Contact Information</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.formLine}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.formLine}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  </View>
);

export default FirstPage;
