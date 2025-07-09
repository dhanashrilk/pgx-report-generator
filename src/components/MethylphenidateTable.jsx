import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Sample data
const methylphenidateData = [
  {
    drug: "Methylphenidate",
    aliases: "(Aptensio®, Biphentin®, Concerta®)",
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
    aliases: "(Aptensio®, Biphentin®, Concerta®)",
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
    aliases: "(Aptensio®, Biphentin®, Concerta®)",
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

const borderColor = "#53c4cd";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "100%",
    marginTop: 10,
  },
  // Header row: top, bottom, right borders
  tableHeader: {
    flexDirection: "row",
    borderWidth: 1,
    // borderBottomWidth: 1,
    borderColor: borderColor,
    minHeight: 40,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: borderColor,
    breakInside: "avoid",
    paddingTop: 8,
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
    minHeight: 40,
  },
  tableCol: {
    width: "15%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
  },
  tableColFirst: {
    width: "15%",
    padding: 4,
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 1.3,
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
    minHeight: 40,
  },
  longCol: {
    width: "40%",
    padding: 4,
    fontSize: 9,
    lineHeight: 1.3,
    minHeight: 100,
    wordBreak: "break-word",
  },
});

const MethylphenidateTablePDF = () => (
  <View style={styles.table}>
    <View
      style={{
        flexDirection: "row",
        flexWrap: "nowrap",
        breakInside: "avoid",
      }}
    >
      <View style={styles.tableHeader} wrap={false}>
        <Text style={styles.tableColHeader}>Drug</Text>
        <Text style={styles.tableColHeader}>Gene&nbsp;•&nbsp;Genotype</Text>
        <Text style={styles.longColHeader}>Clinical Impact</Text>
        <Text style={styles.tableColHeader}>PGx</Text>
        <Text style={styles.tableColHeader}>Citation</Text>
      </View>
    </View>

    {methylphenidateData.map((item, index) => (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          breakInside: "avoid",
        }}
      >
        <View style={styles.tableRow} key={index} wrap={false}>
          <Text style={styles.tableColFirst}>
            {item.drug}
            {"\n"}
            <Text style={{ color: "gray" }}>{item.aliases}</Text>
          </Text>
          <Text style={styles.tableCol}>{item.gene}</Text>
          <Text style={styles.longCol}>{item.impact}</Text>
          <Text style={styles.tableCol}>{item.interaction}</Text>
          <Text style={styles.tableCol}>{item.citation}</Text>
        </View>
      </View>
    ))}
  </View>
);

export default MethylphenidateTablePDF;
