import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import DrugTable from "./DrugTable";
import MethylphenidateTable from "./MethylphenidateTable";
import RisperidoneTable from "./RisperidoneTable";
import Footer from "./Footer";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 15,
    width: "100%",
  },
  section: {
    marginBottom: 10,
  },
  titleBlue: {
    backgroundColor: "#00BAD7",
    color: "#fff",
    padding: 10,
    fontSize: 14,
    borderTopLeftRadius: 12,
    textAlign: "center",
    fontWeight: 500,
  },
  titleGreen: {
    backgroundColor: "#5DC0A0",
    color: "#fff",
    padding: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: 600,
  },
  titleGray: {
    backgroundColor: "#DAE5EA",
    color: "#5A676E",
    padding: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: 600,
    borderBottomRightRadius: 12,
  },
});

const SecondPage = () => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Text style={styles.titleBlue}>GENE DRUG INTERACTION</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.titleGreen}>Drug Synopsis with risk assessment</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.titleGray}>ANTIEPILEPTICS</Text>
      <DrugTable />
    </View>

    <View style={styles.section}>
      <Text style={styles.titleGray}>PSYCHOSTIMULANTS</Text>
      <MethylphenidateTable />
    </View>

    <View style={styles.section}>
      <Text style={styles.titleGray}>ANTIPSYCHOTICS</Text>
      <RisperidoneTable />
    </View>

    <Footer />
  </View>
);

export default SecondPage;
