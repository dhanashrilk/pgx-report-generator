import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// 1. Risperidone Data (icon replaced with emojis for PDF compatibility)
const risperidoneData = [
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "DRD3 (RS6280)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate likelihood of improved risperidone response compared to those with the TT genotype.",
    pgxType: ["PD"],
    icon: "👍",
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "ABCB1 (RS1128503)\nA>G (AG)",
    impact:
      "This patient with this AG genotype have an intermediate but favorable response to risperidone therapy, and those carrying the T allele may experience even better outcomes.",
    pgxType: ["PK", "PD"],
    icon: "👍",
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "HTR2C (RS6318)\nC>G (GG)",
    impact:
      "This patient with this GG genotype are at the highest risk of significant weight gain during risperidone treatment for autism.",
    pgxType: ["PK", "PD"],
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "BDNF (RS6265)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate risk of experiencing more severe hyperprolactinemia when treated with risperidone for autism, and BDNF genetic variants may affect how this medication works.",
    pgxType: ["PD"],
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 19997080",
  },
  {
    drug: "Risperidone",
    aliases: "(Perseris®, Risperdal®, Rykindo®, Uzedy®)",
    gene: "CNR1 (RS1049353)\nC>T (CT)",
    impact:
      "This patient with this CT genotype have an intermediate risk of weight gain from antipsychotic medications, and future studies should focus on gene expression profiles related to this risk.",
    pgxType: ["PD"],
    icon: "👍",
    interaction: "Moderate interaction",
    interactionType: "moderate",
    citation: "PMID: PMC3693401",
  },
];

// 2. Styles (shared with previous tables)
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#f0f0f0",
    padding: 4,
    fontWeight: "bold",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 4,
  },
  longCol: {
    width: "40%",
    padding: 4,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});

// 3. Component
const RisperidoneTablePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 14, marginBottom: 10, textAlign: "center" }}>
        Risperidone Gene-Drug Interaction Table
      </Text>

      <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Drug</Text>
          <Text style={styles.tableColHeader}>Gene • Genotype</Text>
          <Text style={styles.longCol}>Clinical Impact</Text>
          <Text style={styles.tableColHeader}>
            PGx Response{"\n"}(NeuroPrecision)
          </Text>
          <Text style={styles.tableColHeader}>Citations</Text>
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
    </Page>
  </Document>
);

export default RisperidoneTablePDF;
