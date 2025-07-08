import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Sample data (same as provided)
const drugData = [
  {
    drug: "Lamotrigine",
    aliases: "(Lamictal®)",
    gene: "SCN1A (RS2298771)\nC>T (TT)",
    impact:
      "This patient with the TT genotype are at the highest risk of a less favorable response to lamotrigine, while those carrying the C allele have a lower risk of epilepsy and higher chances of achieving seizure remission.",
    pgxType: "PD",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 28754367",
  },
  {
    drug: "Lamotrigine",
    aliases: "(Lamictal®)",
    gene: "CACNA1H (RS2753326)\nA>G (GG)",
    impact:
      "This patient with the GG genotype are at the highest risk of experiencing seizures and may require adjusted dosing of lamotrigine due to reduced clinical benefit compared to those with the A allele.",
    pgxType: "PD",
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: PMC6711340",
  },
  {
    drug: "Carbamazepine",
    aliases: "(Carbatrol®, Carnexiv®, Epitol®, Equetro®, Tegretol®)",
    gene: "CYP1A1 (RS2606345)\nC>A (CA)",
    impact:
      "This patient with the CA genotype have an intermediate risk of seizures when treated with carbamazepine, and those with genotype AA may need adjusted dosing due to a higher likelihood of recurrent seizures.",
    pgxType: "PK",
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMID: 21121773",
  },
  {
    drug: "Carbamazepine",
    aliases: "(Carbatrol®, Carnexiv®, Epitol®, Equetro®, Tegretol®)",
    gene: "CYP2C9 (RS9332120)\nT>C (TC)",
    impact:
      "This patient with the TC genotype have an intermediate chance of not responding well to carbamazepine, and further research is needed to understand how common these genetic variations are in patients with difficult-to-treat epilepsy.",
    pgxType: "PK",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 2834093",
  },
  {
    drug: "Valproic acid",
    aliases: "(Depakene®, Depakote®, Epival®)",
    gene: "UGT2B7 (RS7439366)\nT>C (TC)",
    impact:
      "This patient with the TC genotype have an intermediate risk of altered valproic acid metabolism, but the UGT2B7*2 genotype does not affect plasma VPA concentrations.",
    pgxType: "PK",
    icon: "👍",
    interaction: "Moderate Interaction",
    interactionType: "moderate",
    citation: "PMID: 23099353",
  },
];

// Styles
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
  iconCell: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});

// PDF Component
const DrugTablePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 14, marginBottom: 10, textAlign: "center" }}>
        Gene-Drug Interaction Table
      </Text>

      <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Drug</Text>
          <Text style={styles.tableColHeader}>Gene • Genotype</Text>
          <Text style={styles.longCol}>Clinical Impact</Text>
          <Text style={styles.tableColHeader}>PGx</Text>
          <Text style={styles.tableColHeader}>Citation</Text>
        </View>

        {/* Body */}
        {drugData.map((item, index) => (
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
              {"\n"}({item.pgxType})
            </Text>
            <Text style={styles.tableCol}>{item.citation}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default DrugTablePDF;
