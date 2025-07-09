import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import DrugTable from "./DrugTable";
import MethylphenidateTable from "./MethylphenidateTable";
import RisperidoneTable from "./RisperidoneTable";
import Footer from "./Footer";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 2,
    width: "100%",
  },
  section: {
    marginBottom: 10,
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
    <View>
      <View style={styles.section}>
        <Text style={styles.titleGray}>ANTIEPILEPTICS</Text>
      </View>
      <View style={styles.section}>
        <DrugTable />
      </View>
      <View style={styles.section}>
        <Text style={styles.titleGray}>PSYCHOSTIMULANTS</Text>
      </View>
      <View style={styles.section}>
        <MethylphenidateTable />
      </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.titleGray}>ANTIPSYCHOTICS</Text>
      <RisperidoneTable />
    </View>
  </View>
);

export default SecondPage;
