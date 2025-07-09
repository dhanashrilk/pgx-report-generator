import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import DrugTable from "./DrugTable";
import MethylphenidateTable from "./MethylphenidateTable";
import RisperidoneTable from "./RisperidoneTable";
import Footer from "./Footer";

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    width: "100%",
  },
  section: {
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
});

const SecondPage = () => (
  <View style={styles.container}>
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
  </View>
);

export default SecondPage;
