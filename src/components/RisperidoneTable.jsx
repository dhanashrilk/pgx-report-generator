import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const risperidoneData = [
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "DRD3 (RS6280)\nC>T (CT)",
    impact:
      "This patient with this CT genotype has an intermediate likelihood of improved risperidone response compared to those with the TT genotype.",
    pgxType: ["PD"],
    icon: "👍",
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: 19997080",
  },
  // ... Add other rows here as in your original array
];

const borderColor = "#53c4cd";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "100%",
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: "#e6f7f8",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: borderColor,
    breakInside: "avoid", // prevent breaking row mid-page
  },
  tableColHeader: {
    width: "15%",
    padding: 4,
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: borderColor,
    color: "#007d8c",
  },
  tableCol: {
    width: "15%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
    borderRightWidth: 1,
    borderColor: borderColor,
  },
  longColHeader: {
    width: "40%",
    padding: 4,
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 1.3,
    textAlign: "center",
    color: "#007d8c",
    borderRightWidth: 1,
    borderColor: borderColor,
  },
  longCol: {
    width: "40%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
    wordBreak: "break-word",
    borderRightWidth: 1,
    borderColor: borderColor,
  },
});

const RisperidoneTablePDF = () => (
  <View style={styles.table}>
    {/* Header */}
    <View style={styles.tableHeader}>
      <Text style={styles.tableColHeader}>Drug</Text>
      <Text style={styles.tableColHeader}>Gene • Genotype</Text>
      <Text style={styles.longColHeader}>Clinical Impact</Text>
      <Text style={styles.tableColHeader}>PGx</Text>
      <Text style={styles.tableColHeader}>Citation</Text>
    </View>

    {/* Data Rows */}
    {risperidoneData.map((item, index) => (
      <View style={styles.tableRow} key={index}>
        <Text style={styles.tableCol}>
          {item.drug}
          {"\n"}
          <Text style={{ color: "gray" }}>{item.aliases}</Text>
        </Text>
        <Text style={styles.tableCol}>{item.gene}</Text>
        <Text style={styles.longCol}>{item.impact}</Text>
        <Text style={styles.tableCol}>
          {item.icon} {item.interaction}
          {"\n"}({item.pgxType.join(", ")})
        </Text>
        <Text style={styles.tableCol}>{item.citation}</Text>
      </View>
    ))}
  </View>
);

export default RisperidoneTablePDF;
