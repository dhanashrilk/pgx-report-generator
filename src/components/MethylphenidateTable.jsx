import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Sample data
const methylphenidateData = [
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "DRD3 (RS6280)\nC>T (CT)",
    impact:
      "This patient with the CT genotype have an intermediate risk of experiencing side effects from methylphenidate, which is associated with increased stimulant intolerance in children with Autism Spectrum Disorder.",
    pgxType: ["PK", "PD"],
    icon: "👎",
    interaction: "Significant Interaction",
    interactionType: "significant",
    citation: "PMCID: PMC4034115",
  },
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "TRIB3 (RS2295490)\nA>G (GG)",
    impact:
      "This patient with the GG genotype have the lowest risk of suboptimal response to methylphenidate, as the G allele is associated with improved efficacy in ADHD patients.",
    pgxType: ["PD"],
    icon: "👍",
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: PMC5789875",
  },
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®, Cotempla®, Daytrana®)",
    gene: "TRIB3 (RS2295490)\nA>G (GG)",
    impact:
      "This patient with the GG genotype have the lowest risk of suboptimal response to methylphenidate, as the G allele is associated with improved efficacy in ADHD patients.",
    pgxType: ["PD"],
    icon: "👍",
    interaction: "Improved Clinical outcome",
    interactionType: "improved",
    citation: "PMID: PMC5789875",
  },
];

// Styles (shared structure with previous file)
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
  preLine: {
    whiteSpace: "pre-line",
  },
});

// PDF Component
const MethylphenidateTablePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={{ fontSize: 14, marginBottom: 10, textAlign: "center" }}>
        Methylphenidate Gene-Drug Interaction Table
      </Text>

      <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Drug</Text>
          <Text style={styles.tableColHeader}>Gene • Genotype</Text>
          <Text style={styles.longCol}>Clinical Impact</Text>
          <Text style={styles.tableColHeader}>
            PGx Response
            {"\n"}
            (NeuroPrecision)
          </Text>
          <Text style={styles.tableColHeader}>Citations</Text>
        </View>

        {/* Rows */}
        {methylphenidateData.map((item, index) => (
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

export default MethylphenidateTablePDF;
